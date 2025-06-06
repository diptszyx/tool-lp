/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/tool_lp.json`.
 */
export type ToolLp = {
  address: "DduTe3VFPwWGN2EBh8FZ1GSnXe7VFotp1A8eej7qwgX2";
  metadata: {
    name: "toolLp";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Your proxy withdraw program";
  };
  instructions: [
    {
      name: "deposit";
      discriminator: [242, 35, 198, 137, 82, 225, 242, 182];
      accounts: [
        {
          name: "vault";
          writable: true;
        },
        {
          name: "user";
          writable: true;
          signer: true;
        },
        {
          name: "userLock";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [117, 115, 101, 114, 45, 108, 111, 99, 107];
              },
              {
                kind: "account";
                path: "vault";
              },
              {
                kind: "account";
                path: "user";
              }
            ];
          };
        },
        {
          name: "userTokenAccount";
          writable: true;
        },
        {
          name: "vaultTokenAccount";
          writable: true;
        },
        {
          name: "tokenMint";
        },
        {
          name: "poolState";
        },
        {
          name: "token0Vault";
          writable: true;
        },
        {
          name: "token1Vault";
          writable: true;
        },
        {
          name: "tokenProgram";
        },
        {
          name: "clock";
          address: "SysvarC1ock11111111111111111111111111111111";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "unlockTimestamp";
          type: "i64";
        }
      ];
    },
    {
      name: "fundAdminPda";
      discriminator: [240, 158, 230, 206, 237, 200, 43, 220];
      accounts: [
        {
          name: "funder";
          writable: true;
          signer: true;
        },
        {
          name: "adminPda";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [97, 100, 109, 105, 110, 95, 112, 100, 97];
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "initializeAdminPda";
      discriminator: [25, 70, 71, 201, 80, 64, 154, 250];
      accounts: [
        {
          name: "initializer";
          writable: true;
          signer: true;
          address: "4WbU9nksassGissHNW7bSXZrYDsLKrjSDE7WxnLWfys1";
        },
        {
          name: "adminPda";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [97, 100, 109, 105, 110, 95, 112, 100, 97];
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "initialSol";
          type: "u64";
        }
      ];
    },
    {
      name: "initializeVault";
      discriminator: [48, 191, 163, 44, 71, 129, 63, 164];
      accounts: [
        {
          name: "vault";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "poolState";
              }
            ];
          };
        },
        {
          name: "initializer";
          writable: true;
          signer: true;
        },
        {
          name: "token0Vault";
        },
        {
          name: "token1Vault";
        },
        {
          name: "vault0Mint";
        },
        {
          name: "vault1Mint";
        },
        {
          name: "poolState";
        },
        {
          name: "tokenMint";
        },
        {
          name: "vaultTokenAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116, 45, 116, 111, 107, 101, 110];
              },
              {
                kind: "account";
                path: "poolState";
              },
              {
                kind: "account";
                path: "vault";
              }
            ];
          };
        },
        {
          name: "vaultToken0Account";
          writable: true;
        },
        {
          name: "vaultToken1Account";
          writable: true;
        },
        {
          name: "vaultAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  118,
                  97,
                  117,
                  108,
                  116,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ];
              },
              {
                kind: "account";
                path: "poolState";
              },
              {
                kind: "account";
                path: "vault";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
        {
          name: "tokenProgram";
        },
        {
          name: "token0Program";
        },
        {
          name: "token1Program";
        },
        {
          name: "associatedTokenProgram";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        }
      ];
      args: [];
    },
    {
      name: "transferWithFee";
      discriminator: [140, 41, 159, 221, 159, 13, 211, 126];
      accounts: [
        {
          name: "userA";
          writable: true;
          signer: true;
        },
        {
          name: "userATokenAccount";
          writable: true;
        },
        {
          name: "userB";
          writable: true;
        },
        {
          name: "userBTokenAccount";
          writable: true;
        },
        {
          name: "adminPda";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [97, 100, 109, 105, 110, 95, 112, 100, 97];
              }
            ];
          };
        },
        {
          name: "admin";
          address: "4WbU9nksassGissHNW7bSXZrYDsLKrjSDE7WxnLWfys1";
        },
        {
          name: "adminTokenAccount";
          writable: true;
        },
        {
          name: "mint";
        },
        {
          name: "tokenProgram";
        },
        {
          name: "associatedTokenProgram";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "withdraw";
      discriminator: [183, 18, 70, 156, 148, 109, 161, 34];
      accounts: [
        {
          name: "vault";
          writable: true;
        },
        {
          name: "user";
          writable: true;
          signer: true;
        },
        {
          name: "userLock";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [117, 115, 101, 114, 45, 108, 111, 99, 107];
              },
              {
                kind: "account";
                path: "vault";
              },
              {
                kind: "account";
                path: "user";
              }
            ];
          };
        },
        {
          name: "vaultTokenAccount";
          writable: true;
        },
        {
          name: "vaultToken0Account";
          writable: true;
        },
        {
          name: "vaultToken1Account";
          writable: true;
        },
        {
          name: "userToken0Account";
          writable: true;
        },
        {
          name: "userToken1Account";
          writable: true;
        },
        {
          name: "admin";
          address: "4WbU9nksassGissHNW7bSXZrYDsLKrjSDE7WxnLWfys1";
        },
        {
          name: "adminToken0Account";
          writable: true;
        },
        {
          name: "adminToken1Account";
          writable: true;
        },
        {
          name: "token0Vault";
          writable: true;
        },
        {
          name: "token1Vault";
          writable: true;
        },
        {
          name: "vaultAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  118,
                  97,
                  117,
                  108,
                  116,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ];
              },
              {
                kind: "account";
                path: "vault.pool_state";
                account: "vault";
              },
              {
                kind: "account";
                path: "vault";
              }
            ];
          };
        },
        {
          name: "poolState";
          writable: true;
        },
        {
          name: "cpSwapProgram";
          address: "CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW";
        },
        {
          name: "authority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  97,
                  110,
                  100,
                  95,
                  108,
                  112,
                  95,
                  109,
                  105,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  95,
                  115,
                  101,
                  101,
                  100
                ];
              }
            ];
            program: {
              kind: "account";
              path: "cpSwapProgram";
            };
          };
        },
        {
          name: "tokenMint";
          relations: ["vault"];
        },
        {
          name: "vault0Mint";
        },
        {
          name: "vault1Mint";
        },
        {
          name: "lpMint";
          writable: true;
        },
        {
          name: "token0Program";
        },
        {
          name: "token1Program";
        },
        {
          name: "tokenProgram";
        },
        {
          name: "tokenProgram2022";
          address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
        },
        {
          name: "memoProgram";
          docs: ["memo program"];
          address: "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr";
        },
        {
          name: "associatedTokenProgram";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
        {
          name: "clock";
          address: "SysvarC1ock11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "lpTokenAmount";
          type: "u64";
        }
      ];
    },
    {
      name: "withdrawFromAdminPda";
      discriminator: [125, 45, 96, 115, 198, 226, 134, 75];
      accounts: [
        {
          name: "admin";
          writable: true;
          signer: true;
          address: "4WbU9nksassGissHNW7bSXZrYDsLKrjSDE7WxnLWfys1";
        },
        {
          name: "adminPda";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [97, 100, 109, 105, 110, 95, 112, 100, 97];
              }
            ];
          };
        },
        {
          name: "recipient";
          writable: true;
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "poolState";
      discriminator: [247, 237, 227, 245, 215, 195, 222, 70];
    },
    {
      name: "userLock";
      discriminator: [107, 42, 69, 173, 232, 188, 205, 98];
    },
    {
      name: "vault";
      discriminator: [211, 8, 232, 43, 2, 152, 117, 119];
    }
  ];
  events: [
    {
      name: "adminPdaFundedEvent";
      discriminator: [57, 237, 138, 207, 56, 1, 201, 171];
    },
    {
      name: "adminPdaInitializedEvent";
      discriminator: [114, 220, 34, 191, 236, 139, 91, 24];
    },
    {
      name: "depositEvent";
      discriminator: [120, 248, 61, 83, 31, 142, 107, 144];
    },
    {
      name: "solWithdrawnFromPdaEvent";
      discriminator: [12, 70, 144, 105, 162, 150, 41, 123];
    },
    {
      name: "transferWithFeeEvent";
      discriminator: [4, 232, 43, 5, 52, 124, 151, 44];
    },
    {
      name: "withdrawEvent";
      discriminator: [22, 9, 133, 26, 160, 44, 71, 192];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "lockNotYetExpired";
      msg: "Lock period has not yet expired";
    },
    {
      code: 6001;
      name: "invalidMint";
      msg: "Invalid LP token mint";
    },
    {
      code: 6002;
      name: "insufficientBalance";
      msg: "Insufficient balance to withdraw";
    },
    {
      code: 6003;
      name: "arithmeticOverflow";
      msg: "Arithmetic overflow error";
    },
    {
      code: 6004;
      name: "arithmeticUnderflow";
      msg: "Arithmetic underflow error";
    },
    {
      code: 6005;
      name: "invalidUnlockTimestamp";
      msg: "Invalid unlock timestamp";
    },
    {
      code: 6006;
      name: "invalidTokenVault";
      msg: "Invalid token vault";
    },
    {
      code: 6007;
      name: "invalidTokenProgram";
      msg: "Invalid token program";
    },
    {
      code: 6008;
      name: "vaultTokenAccountNotInitialized";
      msg: "Vault token account not initialized";
    },
    {
      code: 6009;
      name: "insufficientAdminPdaBalance";
      msg: "Admin PDA has insufficient SOL balance";
    },
    {
      code: 6010;
      name: "unauthorizedAdmin";
      msg: "Unauthorized: Only admin can perform this action";
    },
    {
      code: 6011;
      name: "invalidAmount";
      msg: "Invalid amount: Must be greater than 0";
    }
  ];
  types: [
    {
      name: "adminPdaFundedEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "adminPda";
            type: "pubkey";
          },
          {
            name: "funder";
            type: "pubkey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "newBalance";
            type: "u64";
          },
          {
            name: "timestamp";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "adminPdaInitializedEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "adminPda";
            type: "pubkey";
          },
          {
            name: "initializer";
            type: "pubkey";
          },
          {
            name: "initialSol";
            type: "u64";
          },
          {
            name: "timestamp";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "depositEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "user";
            type: "pubkey";
          },
          {
            name: "vault";
            type: "pubkey";
          },
          {
            name: "poolState";
            type: "pubkey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "unlockTimestamp";
            type: "i64";
          },
          {
            name: "timestamp";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "poolState";
      serialization: "bytemuckunsafe";
      repr: {
        kind: "c";
        packed: true;
      };
      type: {
        kind: "struct";
        fields: [
          {
            name: "ammConfig";
            docs: ["Which config the pool belongs"];
            type: "pubkey";
          },
          {
            name: "poolCreator";
            docs: ["pool creator"];
            type: "pubkey";
          },
          {
            name: "token0Vault";
            docs: ["Token A"];
            type: "pubkey";
          },
          {
            name: "token1Vault";
            docs: ["Token B"];
            type: "pubkey";
          },
          {
            name: "lpMint";
            docs: [
              "Pool tokens are issued when A or B tokens are deposited.",
              "Pool tokens can be withdrawn back to the original A or B token."
            ];
            type: "pubkey";
          },
          {
            name: "token0Mint";
            docs: ["Mint information for token A"];
            type: "pubkey";
          },
          {
            name: "token1Mint";
            docs: ["Mint information for token B"];
            type: "pubkey";
          },
          {
            name: "token0Program";
            docs: ["token_0 program"];
            type: "pubkey";
          },
          {
            name: "token1Program";
            docs: ["token_1 program"];
            type: "pubkey";
          },
          {
            name: "observationKey";
            docs: ["observation account to store oracle data"];
            type: "pubkey";
          },
          {
            name: "authBump";
            type: "u8";
          },
          {
            name: "status";
            docs: [
              "Bitwise representation of the state of the pool",
              "bit0, 1: disable deposit(value is 1), 0: normal",
              "bit1, 1: disable withdraw(value is 2), 0: normal",
              "bit2, 1: disable swap(value is 4), 0: normal"
            ];
            type: "u8";
          },
          {
            name: "lpMintDecimals";
            type: "u8";
          },
          {
            name: "mint0Decimals";
            docs: ["mint0 and mint1 decimals"];
            type: "u8";
          },
          {
            name: "mint1Decimals";
            type: "u8";
          },
          {
            name: "lpSupply";
            docs: ["True circulating supply without burns and lock ups"];
            type: "u64";
          },
          {
            name: "protocolFeesToken0";
            docs: [
              "The amounts of token_0 and token_1 that are owed to the liquidity provider."
            ];
            type: "u64";
          },
          {
            name: "protocolFeesToken1";
            type: "u64";
          },
          {
            name: "fundFeesToken0";
            type: "u64";
          },
          {
            name: "fundFeesToken1";
            type: "u64";
          },
          {
            name: "openTime";
            docs: ["The timestamp allowed for swap in the pool."];
            type: "u64";
          },
          {
            name: "recentEpoch";
            docs: ["recent epoch"];
            type: "u64";
          },
          {
            name: "padding";
            docs: ["padding for future updates"];
            type: {
              array: ["u64", 31];
            };
          }
        ];
      };
    },
    {
      name: "solWithdrawnFromPdaEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "adminPda";
            type: "pubkey";
          },
          {
            name: "recipient";
            type: "pubkey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "remainingBalance";
            type: "u64";
          },
          {
            name: "timestamp";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "transferWithFeeEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "userA";
            type: "pubkey";
          },
          {
            name: "userB";
            type: "pubkey";
          },
          {
            name: "admin";
            type: "pubkey";
          },
          {
            name: "mint";
            type: "pubkey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "fee";
            type: "u64";
          },
          {
            name: "timestamp";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "userLock";
      type: {
        kind: "struct";
        fields: [
          {
            name: "user";
            type: "pubkey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "unlockTimestamp";
            type: "i64";
          },
          {
            name: "depositTokenPerLp0";
            type: "u64";
          },
          {
            name: "depositTokenPerLp1";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "vault";
      type: {
        kind: "struct";
        fields: [
          {
            name: "poolState";
            type: "pubkey";
          },
          {
            name: "tokenMint";
            type: "pubkey";
          },
          {
            name: "vaultTokenAccount";
            type: "pubkey";
          },
          {
            name: "totalLocked";
            type: "u64";
          },
          {
            name: "bump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "withdrawEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "user";
            type: "pubkey";
          },
          {
            name: "vault";
            type: "pubkey";
          },
          {
            name: "poolState";
            type: "pubkey";
          },
          {
            name: "lpAmount";
            type: "u64";
          },
          {
            name: "token0Amount";
            type: "u64";
          },
          {
            name: "token1Amount";
            type: "u64";
          },
          {
            name: "fee0Amount";
            type: "u64";
          },
          {
            name: "fee1Amount";
            type: "u64";
          },
          {
            name: "timestamp";
            type: "i64";
          }
        ];
      };
    }
  ];
};
