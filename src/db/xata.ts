// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "list",
    checkConstraints: {},
    foreignKeys: {},
    primaryKey: ["id"],
    uniqueConstraints: {},
    columns: [
      {
        name: "creator",
        type: "string",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "name",
        type: "string",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "placement",
        type: "int",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "verifier",
        type: "string",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type List = InferredTypes["list"];
export type ListRecord = List & XataRecord;

export type DatabaseSchema = {
  list: ListRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://aguywhosaguy-s-workspace-26odqp.us-east-1.xata.sh/db/aguywhosaguy-starter",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
