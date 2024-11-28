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

        createMany: procedure.input($Schema.FinancialGoalInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialGoal.createMany(input as any))),

        create: procedure.input($Schema.FinancialGoalInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialGoal.create(input as any))),

        deleteMany: procedure.input($Schema.FinancialGoalInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialGoal.deleteMany(input as any))),

        delete: procedure.input($Schema.FinancialGoalInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialGoal.delete(input as any))),

        findFirst: procedure.input($Schema.FinancialGoalInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).financialGoal.findFirst(input as any))),

        findMany: procedure.input($Schema.FinancialGoalInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).financialGoal.findMany(input as any))),

        findUnique: procedure.input($Schema.FinancialGoalInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).financialGoal.findUnique(input as any))),

        updateMany: procedure.input($Schema.FinancialGoalInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialGoal.updateMany(input as any))),

        update: procedure.input($Schema.FinancialGoalInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).financialGoal.update(input as any))),

        count: procedure.input($Schema.FinancialGoalInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).financialGoal.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.FinancialGoalCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialGoalCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialGoalCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialGoalCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.FinancialGoalCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialGoalCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FinancialGoalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FinancialGoalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialGoalCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialGoalCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FinancialGoalGetPayload<T>, Context>) => Promise<Prisma.FinancialGoalGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.FinancialGoalDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialGoalDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialGoalDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialGoalDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.FinancialGoalDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialGoalDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FinancialGoalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FinancialGoalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialGoalDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialGoalDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FinancialGoalGetPayload<T>, Context>) => Promise<Prisma.FinancialGoalGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.FinancialGoalFindFirstArgs, TData = Prisma.FinancialGoalGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.FinancialGoalFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FinancialGoalGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FinancialGoalFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.FinancialGoalFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FinancialGoalGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FinancialGoalGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.FinancialGoalFindManyArgs, TData = Array<Prisma.FinancialGoalGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.FinancialGoalFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.FinancialGoalGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FinancialGoalFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.FinancialGoalFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.FinancialGoalGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.FinancialGoalGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.FinancialGoalFindUniqueArgs, TData = Prisma.FinancialGoalGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.FinancialGoalFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FinancialGoalGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FinancialGoalFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FinancialGoalFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FinancialGoalGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FinancialGoalGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.FinancialGoalUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialGoalUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialGoalUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialGoalUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.FinancialGoalUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FinancialGoalUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FinancialGoalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FinancialGoalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FinancialGoalUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FinancialGoalUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FinancialGoalGetPayload<T>, Context>) => Promise<Prisma.FinancialGoalGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.FinancialGoalCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.FinancialGoalCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.FinancialGoalCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.FinancialGoalCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.FinancialGoalCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.FinancialGoalCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.FinancialGoalCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.FinancialGoalCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
