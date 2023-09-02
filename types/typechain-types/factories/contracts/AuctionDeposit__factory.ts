/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  AuctionDeposit,
  AuctionDepositInterface,
} from "../../contracts/AuctionDeposit";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_monoNFTAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SendToTreasury",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "communityTokenAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllDeposit",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IAuctionDeposit.DepositInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getDepositByAddress",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IAuctionDeposit.DepositInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "monoNFTAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "payForClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendToTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_communityTokenAddr",
        type: "address",
      },
    ],
    name: "setCommunityTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_monoNFTAddr",
        type: "address",
      },
    ],
    name: "setMonoNFTAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasuryAddr",
        type: "address",
      },
    ],
    name: "setTreasuryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasuryAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405268878678326eac9000006004553480156200001e57600080fd5b5060405162001d9538038062001d958339818101604052810190620000449190620000fe565b600160008190555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000130565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000c68262000099565b9050919050565b620000d881620000b9565b8114620000e457600080fd5b50565b600081519050620000f881620000cd565b92915050565b60006020828403121562000117576200011662000094565b5b60006200012784828501620000e7565b91505092915050565b611c5580620001406000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636083e59a1161008c578063988f21c611610066578063988f21c6146101ec578063b6b55f251461020a578063c414324714610226578063dbcddeb514610242576100cf565b80636083e59a1461019657806361410a6e146101b45780636605bfda146101d0576100cf565b806324b5c928146100d45780632613a680146100f2578063262e1d0c1461010e5780632e1a7d4d1461012c57806330d9a62a146101485780633da0345314610166575b600080fd5b6100dc61025e565b6040516100e99190611106565b60405180910390f35b61010c60048036038101906101079190611152565b610284565b005b6101166103a8565b6040516101239190611106565b60405180910390f35b610146600480360381019061014191906111b5565b6103ce565b005b610150610544565b60405161015d9190611106565b60405180910390f35b610180600480360381019061017b9190611152565b61056a565b60405161018d919061122f565b60405180910390f35b61019e6105e9565b6040516101ab9190611259565b60405180910390f35b6101ce60048036038101906101c99190611274565b6105ef565b005b6101ea60048036038101906101e59190611152565b6107d3565b005b6101f46108f7565b6040516102019190611392565b60405180910390f35b610224600480360381019061021f91906111b5565b610958565b005b610240600480360381019061023b9190611152565b610bb8565b005b61025c600480360381019061025791906111b5565b610cdc565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166391d148546000801b336040518363ffffffff1660e01b81526004016102e49291906113cd565b602060405180830381865afa158015610301573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610325919061142e565b610364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035b906114de565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610450576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044790611570565b60405180910390fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461049f91906115bf565b925050819055506104f33382600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610d7a9092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364826040516105399190611259565b60405180910390a250565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610572611095565b600060405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815250905080915050919050565b60045481565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461067f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067690611665565b60405180910390fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610701576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f8906116f7565b60405180910390fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461075091906115bf565b925050819055508060056000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107c89190611717565b925050819055505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166391d148546000801b336040518363ffffffff1660e01b81526004016108339291906113cd565b602060405180830381865afa158015610850573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610874919061142e565b6108b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108aa906114de565b60405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606060008067ffffffffffffffff8111156109155761091461174b565b5b60405190808252806020026020018201604052801561094e57816020015b61093b611095565b8152602001906001900390816109335790505b5090508091505090565b6000811161099b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610992906117ec565b60405180910390fd5b60045481600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546109e99190611717565b1115610a2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a219061187e565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610a8b9392919061189e565b6020604051808303816000875af1158015610aaa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ace919061142e565b905080610b10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0790611947565b60405180910390fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b5f9190611717565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c83604051610bac9190611259565b60405180910390a25050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166391d148546000801b336040518363ffffffff1660e01b8152600401610c189291906113cd565b602060405180830381865afa158015610c35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c59919061142e565b610c98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8f906114de565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610d293382600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610d7a9092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167f5bf38d9547f1edc999282b6d13ce0839a752b149312d54574fae7cc1ddebd44682604051610d6f9190611259565b60405180910390a250565b610dfb8363a9059cbb60e01b8484604051602401610d99929190611967565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610e00565b505050565b6000610e62826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610ec89092919063ffffffff16565b9050600081511480610e84575080806020019051810190610e83919061142e565b5b610ec3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eba90611a02565b60405180910390fd5b505050565b6060610ed78484600085610ee0565b90509392505050565b606082471015610f25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1c90611a94565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610f4e9190611b25565b60006040518083038185875af1925050503d8060008114610f8b576040519150601f19603f3d011682016040523d82523d6000602084013e610f90565b606091505b5091509150610fa187838387610fad565b92505050949350505050565b6060831561100f57600083510361100757610fc785611022565b611006576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ffd90611b88565b60405180910390fd5b5b82905061101a565b6110198383611045565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000825111156110585781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108c9190611bfd565b60405180910390fd5b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110f0826110c5565b9050919050565b611100816110e5565b82525050565b600060208201905061111b60008301846110f7565b92915050565b600080fd5b61112f816110e5565b811461113a57600080fd5b50565b60008135905061114c81611126565b92915050565b60006020828403121561116857611167611121565b5b60006111768482850161113d565b91505092915050565b6000819050919050565b6111928161117f565b811461119d57600080fd5b50565b6000813590506111af81611189565b92915050565b6000602082840312156111cb576111ca611121565b5b60006111d9848285016111a0565b91505092915050565b6111eb816110e5565b82525050565b6111fa8161117f565b82525050565b60408201600082015161121660008501826111e2565b50602082015161122960208501826111f1565b50505050565b60006040820190506112446000830184611200565b92915050565b6112538161117f565b82525050565b600060208201905061126e600083018461124a565b92915050565b6000806040838503121561128b5761128a611121565b5b60006112998582860161113d565b92505060206112aa858286016111a0565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6040820160008201516112f660008501826111e2565b50602082015161130960208501826111f1565b50505050565b600061131b83836112e0565b60408301905092915050565b6000602082019050919050565b600061133f826112b4565b61134981856112bf565b9350611354836112d0565b8060005b8381101561138557815161136c888261130f565b975061137783611327565b925050600181019050611358565b5085935050505092915050565b600060208201905081810360008301526113ac8184611334565b905092915050565b6000819050919050565b6113c7816113b4565b82525050565b60006040820190506113e260008301856113be565b6113ef60208301846110f7565b9392505050565b60008115159050919050565b61140b816113f6565b811461141657600080fd5b50565b60008151905061142881611402565b92915050565b60006020828403121561144457611443611121565b5b600061145284828501611419565b91505092915050565b600082825260208201905092915050565b7f41756374696f6e4465706f7369743a204f6e6c792061646d696e73206f66204d60008201527f6f6e6f4e46542063616e2063616c6c0000000000000000000000000000000000602082015250565b60006114c8602f8361145b565b91506114d38261146c565b604082019050919050565b600060208201905081810360008301526114f7816114bb565b9050919050565b7f41756374696f6e4465706f7369743a20576974686472617720616d6f756e742060008201527f65786365656473206465706f7369740000000000000000000000000000000000602082015250565b600061155a602f8361145b565b9150611565826114fe565b604082019050919050565b600060208201905081810360008301526115898161154d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115ca8261117f565b91506115d58361117f565b92508282039050818111156115ed576115ec611590565b5b92915050565b7f41756374696f6e4465706f7369743a204f6e6c79204d6f6e6f4e46542063616e60008201527f2063616c6c20706179466f72436c61696d2066756e6374696f6e000000000000602082015250565b600061164f603a8361145b565b915061165a826115f3565b604082019050919050565b6000602082019050818103600083015261167e81611642565b9050919050565b7f41756374696f6e4465706f7369743a204465706f73697420616d6f756e74206960008201527f73206e6f7420656e6f7567680000000000000000000000000000000000000000602082015250565b60006116e1602c8361145b565b91506116ec82611685565b604082019050919050565b60006020820190508181036000830152611710816116d4565b9050919050565b60006117228261117f565b915061172d8361117f565b925082820190508082111561174557611744611590565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f41756374696f6e4465706f7369743a20416d6f756e742073686f756c6420626560008201527f2067726561746572207468616e20300000000000000000000000000000000000602082015250565b60006117d6602f8361145b565b91506117e18261177a565b604082019050919050565b60006020820190508181036000830152611805816117c9565b9050919050565b7f41756374696f6e4465706f7369743a204465706f736974206c696d697420657860008201527f6365656465640000000000000000000000000000000000000000000000000000602082015250565b600061186860268361145b565b91506118738261180c565b604082019050919050565b600060208201905081810360008301526118978161185b565b9050919050565b60006060820190506118b360008301866110f7565b6118c060208301856110f7565b6118cd604083018461124a565b949350505050565b7f41756374696f6e4465706f7369743a20436f6d6d756e69747920746f6b656e2060008201527f7472616e73666572206661696c65640000000000000000000000000000000000602082015250565b6000611931602f8361145b565b915061193c826118d5565b604082019050919050565b6000602082019050818103600083015261196081611924565b9050919050565b600060408201905061197c60008301856110f7565b611989602083018461124a565b9392505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b60006119ec602a8361145b565b91506119f782611990565b604082019050919050565b60006020820190508181036000830152611a1b816119df565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611a7e60268361145b565b9150611a8982611a22565b604082019050919050565b60006020820190508181036000830152611aad81611a71565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611ae8578082015181840152602081019050611acd565b60008484015250505050565b6000611aff82611ab4565b611b098185611abf565b9350611b19818560208601611aca565b80840191505092915050565b6000611b318284611af4565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611b72601d8361145b565b9150611b7d82611b3c565b602082019050919050565b60006020820190508181036000830152611ba181611b65565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b6000611bcf82611ba8565b611bd9818561145b565b9350611be9818560208601611aca565b611bf281611bb3565b840191505092915050565b60006020820190508181036000830152611c178184611bc4565b90509291505056fea26469706673582212201e1ae9823bd79d18fc5139c4edecf87bbcad24e139e8ee49ae28b2dcdf31435464736f6c63430008120033";

type AuctionDepositConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AuctionDepositConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AuctionDeposit__factory extends ContractFactory {
  constructor(...args: AuctionDepositConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _monoNFTAddr: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_monoNFTAddr, overrides || {});
  }
  override deploy(
    _monoNFTAddr: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_monoNFTAddr, overrides || {}) as Promise<
      AuctionDeposit & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AuctionDeposit__factory {
    return super.connect(runner) as AuctionDeposit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuctionDepositInterface {
    return new Interface(_abi) as AuctionDepositInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AuctionDeposit {
    return new Contract(address, _abi, runner) as unknown as AuctionDeposit;
  }
}
