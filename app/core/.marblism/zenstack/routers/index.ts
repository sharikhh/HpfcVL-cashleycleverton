/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createArticleRouter from "./Article.router";
import createStockRouter from "./Stock.router";
import createSavedArticleRouter from "./SavedArticle.router";
import createWatchlistItemRouter from "./WatchlistItem.router";
import createTransactionRouter from "./Transaction.router";
import createFinancialGoalRouter from "./FinancialGoal.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createPwaSubscriptionRouter from "./PwaSubscription.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as ArticleClientType } from "./Article.router";
import { ClientType as StockClientType } from "./Stock.router";
import { ClientType as SavedArticleClientType } from "./SavedArticle.router";
import { ClientType as WatchlistItemClientType } from "./WatchlistItem.router";
import { ClientType as TransactionClientType } from "./Transaction.router";
import { ClientType as FinancialGoalClientType } from "./FinancialGoal.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as PwaSubscriptionClientType } from "./PwaSubscription.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        article: createArticleRouter(router, procedure),
        stock: createStockRouter(router, procedure),
        savedArticle: createSavedArticleRouter(router, procedure),
        watchlistItem: createWatchlistItemRouter(router, procedure),
        transaction: createTransactionRouter(router, procedure),
        financialGoal: createFinancialGoalRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        pwaSubscription: createPwaSubscriptionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    article: ArticleClientType<AppRouter>;
    stock: StockClientType<AppRouter>;
    savedArticle: SavedArticleClientType<AppRouter>;
    watchlistItem: WatchlistItemClientType<AppRouter>;
    transaction: TransactionClientType<AppRouter>;
    financialGoal: FinancialGoalClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    pwaSubscription: PwaSubscriptionClientType<AppRouter>;
}
