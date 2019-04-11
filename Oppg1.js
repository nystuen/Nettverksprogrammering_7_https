const crypto = require('crypto');

function decrypt(){
  var publicKey = "-----BEGIN RSA PUBLIC KEY-----\n" +
      "MIIBCgKCAQEA639u2haGdEoEQ5wf7lfTHEvDW2FuLBNmZgailV3N9L2JCI9NKtk1\n" +
      "QOlEW2t6jweRfzjNf7Qs9XZkk6v6hveW2AZAYuhbNxQFT1FOk+Ez2RFVLLNZfIc+\n" +
      "sXD0VURkORY7m+CFHfT+pf6hlLrvZONEWdJ1ZmxDtMOH6hTESCOooxdJ8m2+WsA5\n" +
      "GuzOvaagZD/P4Gf9uoVjk/+G4jsB3YyaGAu+hs/Xx/ti9xPwFtCiUloJlUxhsDz9\n" +
      "my67QMmPype4vv1w2Hhaj3UabCQi5qj4JgSctNayRy73Wk0iXtos1s2S38CUsUuS\n" +
      "L7oZWDeIi2pZS0NT7e8cZllAHgSuX8MW+wIDAQAB\n" +
      "-----END RSA PUBLIC KEY-----";
  var signature = "9c3e8d77333fcee3885747250fd48c8a6a5a8e62c24f8ef5f578c752469880409f69fa94a70dae0f71acc7a3988cc81e66881cbc75d5096dedfeeb3d17fb88fd27abe5d32f3b705a11045a91b5b5986f34948009e9b35e8026f986ae871e986392ae37e0458223d62b05fbb50935f63fa920590454d7851d35bf7b3d4cf0752c4683666bcb0398843d141113f32442f8d38f7910a43102da331a6e56fd2a3b3dbe49abf15b4e93c5a81341ed9f87e6bd972536e185e2cde096105db51de519f980901585b2c312b8a097853434bf144a3f14182f2d1b971169280b15061b781a21b8954c626aa4d9417275c1b1812eb0b9770b8320db2f1093f6e775105d39d5"
  const verify = crypto.createVerify('SHA512');
  verify.update('important message!');
  verify.end();
  console.log('Nå skal vi teste om meldingen har blitt tuklet med. Hvis verifiseringe feiler er den det.\nVerifisert: ' + verify.verify(publicKey, signature));

  // tester egen med signatur
  const privateKey2 = "-----BEGIN RSA PRIVATE KEY-----\n" +
      "MIIEowIBAAKCAQBzhg6g3b9Hvq4oMyegUMEDNPRDtPtb5y8d35SKd2l7g4qhKbwl\n" +
      "4sXekI6bwejBp04ir2YdhygUKYETHjC+w4wvUUlMRUbvFFmoaw+wMTKZCPR0Lwtc\n" +
      "hrY7ItfI1SBX1Hxw884yoQWxqVlF5ih65dqVM7K/ec0gZDdPPa9Epje0HNztMcQH\n" +
      "UGpwx0bvvJ9gpc5rZ9WRgRctumYxNm3lPapmsJ9lygmIA3k6C8DiIR8LfwMbtTu8\n" +
      "lLYMPPwVbnajA57x4jlT+Gquy9FDU0/ZmaE4skb1GRYD7HGHKKYZW2KJ2P2IeNCE\n" +
      "+aKhnxQn4Lhz6G4nRKHxkq1nkaUU2AiaK2IPAgMBAAECggEAAyJV70NU1ytzKiAJ\n" +
      "KS5HrkCXh+a3Ew04mATi0Mbgk7tD3Y92TUjTuXAOjmc6W1agpgxAJvjtu25M1Cnz\n" +
      "hJllijsYU/tlK0NQE2OkL1GGX+SATU6hbkcxVnVhiU9O61MWdTIIHBOGRgWkKGNQ\n" +
      "IdVukrGuXcd+KyzM21d/E8u2oypDup9J1Aa/4yiTDfUcU/K29IcS9B+0SvR2fLyI\n" +
      "60o6IwPN+TVYsgJflZKIjGWof7yP06VA/+IqqA/eO2jh1FDfd6E/wFNFLAP/mC01\n" +
      "PEXL976na5P80/M0AX3LtisQnFgAV1w23zKRC3cR8Y33UZZzKA31ixsRM58R2TeZ\n" +
      "8DF50QKBgQDXXfdbIJJ508LHZipNoQagcstexsdX/XfLYMhFslSdcgNUEgcVyvR/\n" +
      "xi6CyaRxMN1W3MoaPHsIjCVL8Nx+6ObL3o6Q4OZ4bJWG4j6cC0HVB1vXuUOP+aL5\n" +
      "syKd8pWFIcKo2k7oNu/GME6El8VUHghX+G8wVWgNaGB5OtL8kj+IswKBgQCJUb7O\n" +
      "8HMU6Pk8pzVED9BKlrL/+m7Q8obuuhwjCm4sKj8mUmtsxrIFRFVOYCkKYKuGx9Vw\n" +
      "0I/0BMS2S0jvNBu0MOJKDv/ggfi47qTE3uVw+WISw4zl8PERyfkwLwMWy+wwfSE8\n" +
      "L+IWUZ9ClirQ9k37VGV70sqwT8htwQvKsVQXNQKBgQCkprpNeQGDElp/h6Qf5VPj\n" +
      "pt/EfcQ5iRbk7gEvB7+Y/2l8BKxWBOwYI7O7Wd3Wi70sg3Afzs1hI4QAIwzwGa8Z\n" +
      "ffUQ3mBVAO7wSFgFhLW34ABfVMxKblgi/skgaC3Xso/X988LybRWmOfuhvnd7XgD\n" +
      "iXO4SBNc7MeU51wWrNjV8QKBgDFLPPnAay9oaoARbheeraD49Azb84fiZ/muqYcS\n" +
      "qXYFPGIfWBzWPvWRECZwcosdJLXfaoly9Rod1Be0ctwbko5etfzr4YLQZV7NnCxn\n" +
      "72lcvI4L0LqCgadnH6LiXXODhKfrY1Ddx4VHi6o1ie01Xc0JAN0wUD52hXaQxBDh\n" +
      "E1S5AoGBAKLl0VtcUDCqVbWbgZK36AEGDkqH/x3NS8XJQvLifAnCkbUd7+oChCRv\n" +
      "HIecNFuUrfRymXARtGpmTEn8rZjB65I0W2ZeNIoFyZKlh71fLkifRDSKCZpEw1OT\n" +
      "I1I9UzMHezaNq/w1oDSDy7sm/ibTos5QEAb/y8vxi3KSB0iC6TPH\n" +
      "-----END RSA PRIVATE KEY-----";

  const publicKey2 = "-----BEGIN PUBLIC KEY-----\n" +
      "MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBzhg6g3b9Hvq4oMyegUMED\n" +
      "NPRDtPtb5y8d35SKd2l7g4qhKbwl4sXekI6bwejBp04ir2YdhygUKYETHjC+w4wv\n" +
      "UUlMRUbvFFmoaw+wMTKZCPR0LwtchrY7ItfI1SBX1Hxw884yoQWxqVlF5ih65dqV\n" +
      "M7K/ec0gZDdPPa9Epje0HNztMcQHUGpwx0bvvJ9gpc5rZ9WRgRctumYxNm3lPapm\n" +
      "sJ9lygmIA3k6C8DiIR8LfwMbtTu8lLYMPPwVbnajA57x4jlT+Gquy9FDU0/ZmaE4\n" +
      "skb1GRYD7HGHKKYZW2KJ2P2IeNCE+aKhnxQn4Lhz6G4nRKHxkq1nkaUU2AiaK2IP\n" +
      "AgMBAAE=\n" +
      "-----END PUBLIC KEY-----";

  const sign2 = crypto.createSign('SHA256');
  sign2.update('important message!');
  sign2.end();
  const signature2 = sign2.sign(privateKey2);
  const verify2 = crypto.createVerify('SHA256');
  verify2.update('important message!');
  verify2.end();
  console.log('\nTester med egen signatur, virker verify fra crypto? \nVerifisert: ' + verify2.verify(publicKey2, signature2));
}
decrypt();