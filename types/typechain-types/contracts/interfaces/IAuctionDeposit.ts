/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace IAuctionDeposit {
  export type DepositInfoStruct = { user: AddressLike; amount: BigNumberish };

  export type DepositInfoStructOutput = [user: string, amount: bigint] & {
    user: string;
    amount: bigint;
  };
}

export declare namespace IMonoNFT {
  export type ShareOfCommunityTokenStruct = {
    shareHolder: AddressLike;
    shareRatio: BigNumberish;
  };

  export type ShareOfCommunityTokenStructOutput = [
    shareHolder: string,
    shareRatio: bigint
  ] & { shareHolder: string; shareRatio: bigint };
}

export interface IAuctionDepositInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "deposit"
      | "getAllDeposit"
      | "getDepositByAddress"
      | "payForClaim"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Deposit" | "SendToTreasury" | "Withdraw"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositByAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "payForClaim",
    values: [AddressLike, BigNumberish, IMonoNFT.ShareOfCommunityTokenStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payForClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace DepositEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SendToTreasuryEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IAuctionDeposit extends BaseContract {
  connect(runner?: ContractRunner | null): IAuctionDeposit;
  waitForDeployment(): Promise<this>;

  interface: IAuctionDepositInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  deposit: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getAllDeposit: TypedContractMethod<
    [],
    [IAuctionDeposit.DepositInfoStructOutput[]],
    "view"
  >;

  getDepositByAddress: TypedContractMethod<
    [_address: AddressLike],
    [IAuctionDeposit.DepositInfoStructOutput],
    "view"
  >;

  payForClaim: TypedContractMethod<
    [
      from: AddressLike,
      amount: BigNumberish,
      sharesOfCommunityToken: IMonoNFT.ShareOfCommunityTokenStruct[]
    ],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getAllDeposit"
  ): TypedContractMethod<
    [],
    [IAuctionDeposit.DepositInfoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDepositByAddress"
  ): TypedContractMethod<
    [_address: AddressLike],
    [IAuctionDeposit.DepositInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "payForClaim"
  ): TypedContractMethod<
    [
      from: AddressLike,
      amount: BigNumberish,
      sharesOfCommunityToken: IMonoNFT.ShareOfCommunityTokenStruct[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "SendToTreasury"
  ): TypedContractEvent<
    SendToTreasuryEvent.InputTuple,
    SendToTreasuryEvent.OutputTuple,
    SendToTreasuryEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;

  filters: {
    "Deposit(address,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "SendToTreasury(address,uint256)": TypedContractEvent<
      SendToTreasuryEvent.InputTuple,
      SendToTreasuryEvent.OutputTuple,
      SendToTreasuryEvent.OutputObject
    >;
    SendToTreasury: TypedContractEvent<
      SendToTreasuryEvent.InputTuple,
      SendToTreasuryEvent.OutputTuple,
      SendToTreasuryEvent.OutputObject
    >;

    "Withdraw(address,uint256)": TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
  };
}
