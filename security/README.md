# Release Signing

## Public identity

- Key type: Ed25519
- Key fingerprint: `SHA256:M8k7jouMOhYU8ekX3g54qj7J0kAPnAwDbTznmPE498Q`
- Public key: `security/release-signing-key.pub`
- Verification identity: `verifiable-art-commons-release`
- Signature namespace: `verifiable-art-commons`

The private key is maintained outside this repository and must never be added
to Git, GitHub Actions secrets, logs or a public release archive.

This bootstrap key is controlled by the current maintainer. Before any public
economic activation, it must move to encrypted offline storage or a hardware
signing device. A future key rotation must publish a transition record signed
by both the old and new keys.

## Limits

A valid signature proves that the corresponding private key signed the exact
bytes. It does not prove that the project is decentralized, that an artwork is
authentic, or that a GitHub account alone is the official project identity.

GitHub may display a commit or tag as `Unverified` until the same public signing
key is separately registered as an SSH signing key on the GitHub account.

## Verify a release

From a clean clone:

```sh
npm run check
npm run release:verify
ssh-keygen -Y verify \
  -f security/allowed_signers \
  -I verifiable-art-commons-release \
  -n verifiable-art-commons \
  -s release/release-manifest.json.sig \
  < release/release-manifest.json
```

To verify a signed release tag after checking out the tag:

```sh
git -c gpg.format=ssh \
  -c gpg.ssh.allowedSignersFile=security/allowed_signers \
  verify-tag v0.1.0-public.1
```

## Rotation and revocation

1. Publish the new public key and fingerprint.
2. Sign a rotation statement with both old and new keys.
3. Add the new identity to `allowed_signers` without erasing historical records.
4. Mark the old key revoked from a stated effective time.
5. Re-verify old releases using the old key record.
