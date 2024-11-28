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

        createMany: procedure.input($Schema.SavedArticleInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedArticle.createMany(input as any))),

        create: procedure.input($Schema.SavedArticleInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedArticle.create(input as any))),

        deleteMany: procedure.input($Schema.SavedArticleInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedArticle.deleteMany(input as any))),

        delete: procedure.input($Schema.SavedArticleInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedArticle.delete(input as any))),

        findFirst: procedure.input($Schema.SavedArticleInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).savedArticle.findFirst(input as any))),

        findMany: procedure.input($Schema.SavedArticleInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).savedArticle.findMany(input as any))),

        findUnique: procedure.input($Schema.SavedArticleInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).savedArticle.findUnique(input as any))),

        updateMany: procedure.input($Schema.SavedArticleInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedArticle.updateMany(input as any))),

        update: procedure.input($Schema.SavedArticleInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedArticle.update(input as any))),

        count: procedure.input($Schema.SavedArticleInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).savedArticle.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SavedArticleCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedArticleCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedArticleCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedArticleCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SavedArticleCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedArticleCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SavedArticleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SavedArticleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedArticleCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedArticleCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SavedArticleGetPayload<T>, Context>) => Promise<Prisma.SavedArticleGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SavedArticleDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedArticleDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedArticleDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedArticleDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SavedArticleDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedArticleDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SavedArticleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SavedArticleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedArticleDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedArticleDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SavedArticleGetPayload<T>, Context>) => Promise<Prisma.SavedArticleGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SavedArticleFindFirstArgs, TData = Prisma.SavedArticleGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.SavedArticleFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SavedArticleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SavedArticleFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SavedArticleFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SavedArticleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SavedArticleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SavedArticleFindManyArgs, TData = Array<Prisma.SavedArticleGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.SavedArticleFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SavedArticleGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SavedArticleFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SavedArticleFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SavedArticleGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SavedArticleGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SavedArticleFindUniqueArgs, TData = Prisma.SavedArticleGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SavedArticleFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SavedArticleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SavedArticleFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SavedArticleFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SavedArticleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SavedArticleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SavedArticleUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedArticleUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedArticleUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedArticleUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SavedArticleUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedArticleUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SavedArticleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SavedArticleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedArticleUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedArticleUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SavedArticleGetPayload<T>, Context>) => Promise<Prisma.SavedArticleGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.SavedArticleCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SavedArticleCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.SavedArticleCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SavedArticleCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.SavedArticleCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.SavedArticleCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SavedArticleCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SavedArticleCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
