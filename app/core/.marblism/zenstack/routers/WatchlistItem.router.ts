/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.WatchlistItemInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).watchlistItem.createMany(input as any))),

        create: procedure.input($Schema.WatchlistItemInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).watchlistItem.create(input as any))),

        deleteMany: procedure.input($Schema.WatchlistItemInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).watchlistItem.deleteMany(input as any))),

        delete: procedure.input($Schema.WatchlistItemInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).watchlistItem.delete(input as any))),

        findFirst: procedure.input($Schema.WatchlistItemInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).watchlistItem.findFirst(input as any))),

        findMany: procedure.input($Schema.WatchlistItemInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).watchlistItem.findMany(input as any))),

        findUnique: procedure.input($Schema.WatchlistItemInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).watchlistItem.findUnique(input as any))),

        updateMany: procedure.input($Schema.WatchlistItemInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).watchlistItem.updateMany(input as any))),

        update: procedure.input($Schema.WatchlistItemInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).watchlistItem.update(input as any))),

        count: procedure.input($Schema.WatchlistItemInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).watchlistItem.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.WatchlistItemCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WatchlistItemCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WatchlistItemCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WatchlistItemCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.WatchlistItemCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WatchlistItemCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WatchlistItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WatchlistItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WatchlistItemCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WatchlistItemCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WatchlistItemGetPayload<T>, Context>) => Promise<Prisma.WatchlistItemGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.WatchlistItemDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WatchlistItemDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WatchlistItemDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WatchlistItemDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.WatchlistItemDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WatchlistItemDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WatchlistItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WatchlistItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WatchlistItemDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WatchlistItemDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WatchlistItemGetPayload<T>, Context>) => Promise<Prisma.WatchlistItemGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.WatchlistItemFindFirstArgs, TData = Prisma.WatchlistItemGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.WatchlistItemFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WatchlistItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WatchlistItemFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WatchlistItemFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WatchlistItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WatchlistItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.WatchlistItemFindManyArgs, TData = Array<Prisma.WatchlistItemGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.WatchlistItemFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.WatchlistItemGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WatchlistItemFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WatchlistItemFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.WatchlistItemGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.WatchlistItemGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.WatchlistItemFindUniqueArgs, TData = Prisma.WatchlistItemGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WatchlistItemFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WatchlistItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WatchlistItemFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WatchlistItemFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WatchlistItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WatchlistItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.WatchlistItemUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WatchlistItemUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WatchlistItemUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WatchlistItemUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.WatchlistItemUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WatchlistItemUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WatchlistItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WatchlistItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WatchlistItemUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WatchlistItemUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WatchlistItemGetPayload<T>, Context>) => Promise<Prisma.WatchlistItemGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.WatchlistItemCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WatchlistItemCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.WatchlistItemCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.WatchlistItemCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.WatchlistItemCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.WatchlistItemCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.WatchlistItemCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WatchlistItemCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
