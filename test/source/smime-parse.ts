/* ©️ 2016 - present FlowCrypt a.s. Limitations apply. Contact human@flowcrypt.com */

import * as ava from 'ava';
import { KeyUtil } from './core/crypto/key.js';
import { expect } from 'chai';

const smimeCert = `-----BEGIN CERTIFICATE-----
MIIE9DCCA9ygAwIBAgIQY/cCXnAPOUUwH7L7pWdPhDANBgkqhkiG9w0BAQsFADCB
jTELMAkGA1UEBhMCSVQxEDAOBgNVBAgMB0JlcmdhbW8xGTAXBgNVBAcMEFBvbnRl
IFNhbiBQaWV0cm8xIzAhBgNVBAoMGkFjdGFsaXMgUy5wLkEuLzAzMzU4NTIwOTY3
MSwwKgYDVQQDDCNBY3RhbGlzIENsaWVudCBBdXRoZW50aWNhdGlvbiBDQSBHMjAe
Fw0yMDAzMjMxMzU2NDZaFw0yMTAzMjMxMzU2NDZaMCIxIDAeBgNVBAMMF2FjdGFs
aXNAbWV0YS4zM21haWwuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
AQEArVVpXBkzGvcqib8rDwqHCaKm2EiPslQ8I0G1ZDxrs6Ke2QXNm3yGVwOzkVvK
eEnuzE5M4BBeh+GwcfvoyS/xI6m44WWnqj65cJoSLA1ypE4D4urv/pzG783y2Vdy
Q96izBdFyevsil89Z2AxZxrFh1RC2XvgXad4yyD4yvVpHskfPexnhLliHl7cpXjw
5D2n1hBGR8CSDbQAgO58PB7Y2ldrTi+rWBu2Akuk/YyWOOiGA8pdfLBIkOFJTeQc
m7+vWP2JTN6Xp+JkGvXQBRaqwyGVg8fSc4e7uGCXZaH5/Na2FXY2OL+tYDDb27zS
3cBrzEbGVjA6raYxcrFWV4PkdwIDAQABo4IBuDCCAbQwDAYDVR0TAQH/BAIwADAf
BgNVHSMEGDAWgBRr8o2eaMElBB9RNFf2FlyU6k1pGjB+BggrBgEFBQcBAQRyMHAw
OwYIKwYBBQUHMAKGL2h0dHA6Ly9jYWNlcnQuYWN0YWxpcy5pdC9jZXJ0cy9hY3Rh
bGlzLWF1dGNsaWcyMDEGCCsGAQUFBzABhiVodHRwOi8vb2NzcDA5LmFjdGFsaXMu
aXQvVkEvQVVUSENMLUcyMCIGA1UdEQQbMBmBF2FjdGFsaXNAbWV0YS4zM21haWwu
Y29tMEcGA1UdIARAMD4wPAYGK4EfARgBMDIwMAYIKwYBBQUHAgEWJGh0dHBzOi8v
d3d3LmFjdGFsaXMuaXQvYXJlYS1kb3dubG9hZDAdBgNVHSUEFjAUBggrBgEFBQcD
AgYIKwYBBQUHAwQwSAYDVR0fBEEwPzA9oDugOYY3aHR0cDovL2NybDA5LmFjdGFs
aXMuaXQvUmVwb3NpdG9yeS9BVVRIQ0wtRzIvZ2V0TGFzdENSTDAdBgNVHQ4EFgQU
FrtAdAOjrcVeHg5K+T7sj7GHySMwDgYDVR0PAQH/BAQDAgWgMA0GCSqGSIb3DQEB
CwUAA4IBAQAa9lXKDmV9874ojmIZEBL1S8mKaSNBWP+n0vp5FO0Yh5oL9lspYTPs
8s6alWUSpVHV8if4uZ2EfcNpNkm9dAajj2n/F/Jyfkp8URu4uvBfm1QColl/zM/D
x4B7FaD2dw0jTF/k5ulDmzUOc4k+j3LtZNbDOZMF/2g05hSKde/he1njlY3oKa9g
VW8ftc2NwiSMthxyEIM+ALbNQVML2oN50gArBn5GeI22/aIBZxjtbEdmSTZIf82H
sOwAnhJ+pD5iIPaF2oa0yN3PvI6IGxLpEv16tQO1N6e5bdP6ZDwqTQJyK+oNTNda
yPLCqVTFJQWaCR5ZTekRQPTDZkjxjxbs
-----END CERTIFICATE-----`;


ava.default('smime-key parsing', async t => {
  const key = await KeyUtil.parse(smimeCert);
  expect(key.id).to.equal('63f7025e700f3945301fb2fba5674f84');
  t.pass();
});
