import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('e87e6243-4e57-4f72-ab2e-f70c44fbdfcd', '1Ana_Thompson84@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('97a17fe4-ffbc-4302-8fdc-19f562d0d298', '17Orlo_White95@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=19', 'stu901vwx234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('bfaa0b34-7ebc-47ae-80ca-5296ceb16d1c', '25Rudolph18@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=27', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f2e36bf3-e27a-49c5-b7ab-a061809f1a2e', '33Broderick15@gmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=35', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('2d92e737-7bdd-4218-b75a-7bc2e75a5c54', '41Emmitt6@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'ghi789jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('9de9f0d4-229d-4804-a433-1ccb9640d5ca', '49Jovanny.Olson@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=51', 'ghi789jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('4cad0c99-e85e-4a93-b290-947c71840e38', '57Pattie.MacGyver-Willms40@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=59', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('9fd649fc-bce7-4731-8cb6-c9766c084322', '65Emelie_Kulas26@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=67', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('ebe53e56-f8d7-4a3c-b490-96ff0a295ab9', '73Scotty_Nitzsche12@hotmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=75', 'ghi789jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('9901a4d8-79eb-42a9-a537-439fbbf32ca0', 'Global Market Insights Inc.', 'https://i.imgur.com/YfJQV5z.png?id=82');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e6a141dc-f559-49d9-a091-5716a9341c5a', 'NextGen Wealth Advisors', 'https://i.imgur.com/YfJQV5z.png?id=85');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('578784af-f990-408e-8b5f-181500ee489d', 'Global Market Insights Inc.', 'https://i.imgur.com/YfJQV5z.png?id=88');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('9876d09d-b8a7-42e1-a17f-646d96141bce', 'Pinnacle Investment Partners', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('edc40301-d35a-45c4-baba-09ba63c509f0', 'FinTech Innovations Ltd.', 'https://i.imgur.com/YfJQV5z.png?id=94');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('2e21a811-c6c9-45cd-9620-9a121465f424', 'NextGen Wealth Advisors', 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('c9bae7e8-c2b2-4dfe-853c-f1dda965a762', 'Pinnacle Investment Partners', 'https://i.imgur.com/YfJQV5z.png?id=100');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('3d2f3e29-d683-4545-aa7a-ff5ef46f5884', 'NextGen Wealth Advisors', 'https://i.imgur.com/YfJQV5z.png?id=103');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('c0c28c27-da4d-4898-8ff8-9fa9c926f84f', 'Pinnacle Investment Partners', 'https://i.imgur.com/YfJQV5z.png?id=106');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b092c8b5-3a6c-46fd-8874-193bd4c07172', 'NextGen Wealth Advisors', 'https://i.imgur.com/YfJQV5z.png?id=109');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e4457e7f-e910-413c-8213-591f1aeaa6ae', 'Financial Analyst', '4cad0c99-e85e-4a93-b290-947c71840e38', '9876d09d-b8a7-42e1-a17f-646d96141bce');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('450c1042-a6e8-46c2-b584-d018b18a244a', 'Financial Analyst', '2d92e737-7bdd-4218-b75a-7bc2e75a5c54', '3d2f3e29-d683-4545-aa7a-ff5ef46f5884');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c1a11d2c-4594-4ec3-897c-e07937da345f', 'Investment Advisor', 'ebe53e56-f8d7-4a3c-b490-96ff0a295ab9', '9876d09d-b8a7-42e1-a17f-646d96141bce');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('4d27ea8a-222b-4af4-a7c3-963475335c79', 'Financial Analyst', 'e87e6243-4e57-4f72-ab2e-f70c44fbdfcd', '9901a4d8-79eb-42a9-a537-439fbbf32ca0');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('0764d188-e315-4385-859d-dbf5ead5d33b', 'Risk Consultant', 'bfaa0b34-7ebc-47ae-80ca-5296ceb16d1c', 'e6a141dc-f559-49d9-a091-5716a9341c5a');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('15a872f3-9667-42b2-b7fa-a8d550c7cf06', 'Market Strategist', 'bfaa0b34-7ebc-47ae-80ca-5296ceb16d1c', 'c0c28c27-da4d-4898-8ff8-9fa9c926f84f');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e2535c36-6878-4ba1-94f7-5b788e9d2aac', 'Financial Analyst', 'ebe53e56-f8d7-4a3c-b490-96ff0a295ab9', '2e21a811-c6c9-45cd-9620-9a121465f424');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('7b7e679a-6fbc-4484-9693-3c666358168e', 'Portfolio Manager', 'f2e36bf3-e27a-49c5-b7ab-a061809f1a2e', '2e21a811-c6c9-45cd-9620-9a121465f424');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('2fcca1ba-bd99-423c-87c1-71f499ad3090', 'Market Strategist', '2d92e737-7bdd-4218-b75a-7bc2e75a5c54', 'e6a141dc-f559-49d9-a091-5716a9341c5a');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('fc12244b-5ac7-4c08-8c92-a0e405b477ea', 'Risk Consultant', '9fd649fc-bce7-4731-8cb6-c9766c084322', 'c9bae7e8-c2b2-4dfe-853c-f1dda965a762');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('e6905765-8ac2-40bc-9a51-202a58ec59e1', 'Financial tip of the day Diversify your portfolio to minimize risk.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('24236d21-76be-4d5b-b3ce-73c3ee7ac903', 'Expert analysis How geopolitical tensions are affecting global markets.', '4cad0c99-e85e-4a93-b290-947c71840e38');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('228cdc35-599d-4296-963d-d27869842585', 'Weekly roundup Top 5 financial news stories you missed.', '4cad0c99-e85e-4a93-b290-947c71840e38');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('7af354cc-3065-454f-818c-5dcd24530917', 'Weekly roundup Top 5 financial news stories you missed.', 'e87e6243-4e57-4f72-ab2e-f70c44fbdfcd');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('64f0fa31-f289-46b4-bb07-6aeb81234e31', 'Financial tip of the day Diversify your portfolio to minimize risk.', 'bfaa0b34-7ebc-47ae-80ca-5296ceb16d1c');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('45c86cf3-9f9d-4785-b8ca-1a2c9719949a', 'Breaking news Market sees unexpected surge in tech stocks.', '9fd649fc-bce7-4731-8cb6-c9766c084322');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('31d50902-5fda-4b0e-9590-23de4d8ea88f', 'Investment strategy The benefits of longterm stock holding.', 'bfaa0b34-7ebc-47ae-80ca-5296ceb16d1c');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('c8ebd8a0-531d-4348-a8f8-139fd8e22e99', 'Weekly roundup Top 5 financial news stories you missed.', '97a17fe4-ffbc-4302-8fdc-19f562d0d298');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('960395ae-86dd-46ca-91d5-609b1de7a4bd', 'Financial tip of the day Diversify your portfolio to minimize risk.', 'ebe53e56-f8d7-4a3c-b490-96ff0a295ab9');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('264a6146-b64e-48ae-a31f-ff7ac96019a7', 'Weekly roundup Top 5 financial news stories you missed.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Article" ("id", "title", "content", "source", "publishDate", "marketImpactScore", "sentiment", "region", "isTrending") VALUES ('86d8e563-7e9b-4f70-a383-4481e26f96ac', 'Retail Sector Shows Signs of Recovery', 'Oil prices surged to new highs this week as concerns over supply disruptions...', 'Bloomberg', '2025-05-28T16:14:10.654Z', '9', 'neutral', 'North America', false);
INSERT INTO "Article" ("id", "title", "content", "source", "publishDate", "marketImpactScore", "sentiment", "region", "isTrending") VALUES ('569636ed-c2b3-4dc6-94c0-14fa33fb10cb', 'Cryptocurrency Market Faces Volatility', 'The central bank has indicated a potential interest rate hike in the coming months...', 'Reuters', '2024-12-09T16:39:20.772Z', '6', 'positive', 'North America', true);
INSERT INTO "Article" ("id", "title", "content", "source", "publishDate", "marketImpactScore", "sentiment", "region", "isTrending") VALUES ('bf61767b-7a72-4e65-b978-6cf8c1964cf6', 'Oil Prices Surge as Supply Concerns Loom', 'Cryptocurrency markets experienced high volatility today with Bitcoin and Ethereum...', 'Wall Street Journal', '2024-02-23T04:46:18.110Z', '7', 'positive', 'Europe', true);
INSERT INTO "Article" ("id", "title", "content", "source", "publishDate", "marketImpactScore", "sentiment", "region", "isTrending") VALUES ('fa044a29-06d5-4f6a-b686-163f9c4f892b', 'Retail Sector Shows Signs of Recovery', 'The central bank has indicated a potential interest rate hike in the coming months...', 'Reuters', '2024-10-22T18:16:32.671Z', '6', 'negative', 'North America', false);
INSERT INTO "Article" ("id", "title", "content", "source", "publishDate", "marketImpactScore", "sentiment", "region", "isTrending") VALUES ('66280cdb-9c63-4244-94cd-969dbe61fd97', 'Retail Sector Shows Signs of Recovery', 'The stock market saw a significant rally today driven by gains in the technology sector...', 'Reuters', '2024-05-30T18:51:37.270Z', '5', 'negative', 'North America', false);
INSERT INTO "Article" ("id", "title", "content", "source", "publishDate", "marketImpactScore", "sentiment", "region", "isTrending") VALUES ('3ef91059-5203-4306-b77e-6f4409f93fbd', 'Cryptocurrency Market Faces Volatility', 'Cryptocurrency markets experienced high volatility today with Bitcoin and Ethereum...', 'Reuters', '2025-07-05T16:57:09.414Z', '6', 'positive', 'Europe', false);
INSERT INTO "Article" ("id", "title", "content", "source", "publishDate", "marketImpactScore", "sentiment", "region", "isTrending") VALUES ('66b9d815-8809-4647-ab8a-d0b72dafed40', 'Retail Sector Shows Signs of Recovery', 'The stock market saw a significant rally today driven by gains in the technology sector...', 'Financial Times', '2024-06-14T06:19:13.182Z', '5', 'negative', 'North America', true);
INSERT INTO "Article" ("id", "title", "content", "source", "publishDate", "marketImpactScore", "sentiment", "region", "isTrending") VALUES ('2ff3b73b-de6b-437d-913b-d75000bc2d63', 'Oil Prices Surge as Supply Concerns Loom', 'The stock market saw a significant rally today driven by gains in the technology sector...', 'Financial Times', '2025-11-10T07:49:28.168Z', '7', 'positive', 'North America', true);
INSERT INTO "Article" ("id", "title", "content", "source", "publishDate", "marketImpactScore", "sentiment", "region", "isTrending") VALUES ('d48e17ad-b6db-4947-8899-a4af5712a6a9', 'Oil Prices Surge as Supply Concerns Loom', 'Oil prices surged to new highs this week as concerns over supply disruptions...', 'Bloomberg', '2025-03-12T00:05:31.999Z', '9', 'negative', 'Europe', true);
INSERT INTO "Article" ("id", "title", "content", "source", "publishDate", "marketImpactScore", "sentiment", "region", "isTrending") VALUES ('f6417e86-5d19-489f-beda-c148e8bfb7f7', 'Oil Prices Surge as Supply Concerns Loom', 'Oil prices surged to new highs this week as concerns over supply disruptions...', 'Financial Times', '2024-10-05T03:46:39.767Z', '6', 'positive', 'Asia', true);

INSERT INTO "Stock" ("id", "symbol", "name", "sector", "marketCap", "currentPrice") VALUES ('6c062054-d32c-4e75-b89f-7e1fad42e09f', 'TSLA', 'Microsoft Corporation', 'Communication Services', '900B', '150.25');
INSERT INTO "Stock" ("id", "symbol", "name", "sector", "marketCap", "currentPrice") VALUES ('d8bb7cea-f485-4531-b085-84f4ec8b39f7', 'AAPL', 'Microsoft Corporation', 'Consumer Discretionary', '2.3T', '2800.50');
INSERT INTO "Stock" ("id", "symbol", "name", "sector", "marketCap", "currentPrice") VALUES ('9337b967-e02f-42cb-8646-460001055d87', 'AAPL', 'Alphabet Inc.', 'Automobiles', '2.3T', '299.99');
INSERT INTO "Stock" ("id", "symbol", "name", "sector", "marketCap", "currentPrice") VALUES ('b34ce9f0-2909-4caf-9056-88cf0b8b3227', 'TSLA', 'Amazon.com Inc.', 'Technology', '1.8T', '2800.50');
INSERT INTO "Stock" ("id", "symbol", "name", "sector", "marketCap", "currentPrice") VALUES ('01a7351a-723f-4bd3-b399-086da038ebde', 'GOOGL', 'Apple Inc.', 'Communication Services', '1.8T', '299.99');
INSERT INTO "Stock" ("id", "symbol", "name", "sector", "marketCap", "currentPrice") VALUES ('012a57c6-f23f-456f-8a2e-66db13450932', 'GOOGL', 'Microsoft Corporation', 'Information Technology', '2.3T', '3400.75');
INSERT INTO "Stock" ("id", "symbol", "name", "sector", "marketCap", "currentPrice") VALUES ('0ead215f-b68b-4422-95c8-4050d2cbfe06', 'TSLA', 'Apple Inc.', 'Information Technology', '2.5T', '150.25');
INSERT INTO "Stock" ("id", "symbol", "name", "sector", "marketCap", "currentPrice") VALUES ('b41e6294-be07-43e2-a855-de839d62cfa4', 'GOOGL', 'Apple Inc.', 'Consumer Discretionary', '1.8T', '299.99');
INSERT INTO "Stock" ("id", "symbol", "name", "sector", "marketCap", "currentPrice") VALUES ('6007a942-28b1-471d-850b-1807e74a2c61', 'GOOGL', 'Tesla Inc.', 'Technology', '1.7T', '2800.50');
INSERT INTO "Stock" ("id", "symbol", "name", "sector", "marketCap", "currentPrice") VALUES ('48129f26-81f7-47c2-92dc-616d9eae5239', 'AAPL', 'Apple Inc.', 'Consumer Discretionary', '2.3T', '2800.50');

INSERT INTO "SavedArticle" ("id", "articleId", "userId") VALUES ('baad6807-eef5-4213-bcd4-dca51c3884b6', '66280cdb-9c63-4244-94cd-969dbe61fd97', '4cad0c99-e85e-4a93-b290-947c71840e38');
INSERT INTO "SavedArticle" ("id", "articleId", "userId") VALUES ('73b5abd2-a922-41a1-a751-748d1e8a6b3f', 'fa044a29-06d5-4f6a-b686-163f9c4f892b', '2d92e737-7bdd-4218-b75a-7bc2e75a5c54');
INSERT INTO "SavedArticle" ("id", "articleId", "userId") VALUES ('78ece300-4161-4f74-82ca-8345816a1349', 'f6417e86-5d19-489f-beda-c148e8bfb7f7', 'bfaa0b34-7ebc-47ae-80ca-5296ceb16d1c');
INSERT INTO "SavedArticle" ("id", "articleId", "userId") VALUES ('6c5c78fd-c68e-4a72-8e92-b4f0272ff8ad', 'd48e17ad-b6db-4947-8899-a4af5712a6a9', '4cad0c99-e85e-4a93-b290-947c71840e38');
INSERT INTO "SavedArticle" ("id", "articleId", "userId") VALUES ('f67279a2-72a7-40a4-9c5d-c99a82253bee', '66280cdb-9c63-4244-94cd-969dbe61fd97', 'f2e36bf3-e27a-49c5-b7ab-a061809f1a2e');
INSERT INTO "SavedArticle" ("id", "articleId", "userId") VALUES ('411a2f13-0233-4a58-a17f-2197ae4ea485', 'f6417e86-5d19-489f-beda-c148e8bfb7f7', '2d92e737-7bdd-4218-b75a-7bc2e75a5c54');
INSERT INTO "SavedArticle" ("id", "articleId", "userId") VALUES ('4188cbbf-33a2-424a-ade8-b12fa1f6adb2', 'f6417e86-5d19-489f-beda-c148e8bfb7f7', '9fd649fc-bce7-4731-8cb6-c9766c084322');
INSERT INTO "SavedArticle" ("id", "articleId", "userId") VALUES ('0597c97b-c6b3-47c4-aebf-0d9d3a031d1e', '569636ed-c2b3-4dc6-94c0-14fa33fb10cb', 'f2e36bf3-e27a-49c5-b7ab-a061809f1a2e');
INSERT INTO "SavedArticle" ("id", "articleId", "userId") VALUES ('39380403-fa0c-4e8e-868b-634690de6320', 'fa044a29-06d5-4f6a-b686-163f9c4f892b', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "SavedArticle" ("id", "articleId", "userId") VALUES ('3ce251ad-0275-4d28-8bc7-fca818d536e8', '2ff3b73b-de6b-437d-913b-d75000bc2d63', '2d92e737-7bdd-4218-b75a-7bc2e75a5c54');

INSERT INTO "WatchlistItem" ("id", "stockId", "userId", "organizationId") VALUES ('273f11b8-8e80-4225-9eb5-c3c0badfb948', '012a57c6-f23f-456f-8a2e-66db13450932', '97a17fe4-ffbc-4302-8fdc-19f562d0d298', 'e6a141dc-f559-49d9-a091-5716a9341c5a');
INSERT INTO "WatchlistItem" ("id", "stockId", "userId", "organizationId") VALUES ('e86ee39e-c9e4-41db-a517-25ffc34f5168', 'b41e6294-be07-43e2-a855-de839d62cfa4', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '9876d09d-b8a7-42e1-a17f-646d96141bce');
INSERT INTO "WatchlistItem" ("id", "stockId", "userId", "organizationId") VALUES ('0fc3c9e6-7eaa-4494-9772-3d05c79b066c', '6c062054-d32c-4e75-b89f-7e1fad42e09f', 'bfaa0b34-7ebc-47ae-80ca-5296ceb16d1c', 'c9bae7e8-c2b2-4dfe-853c-f1dda965a762');
INSERT INTO "WatchlistItem" ("id", "stockId", "userId", "organizationId") VALUES ('c33a8ab1-d208-4be3-847e-9e096a47a2b9', '9337b967-e02f-42cb-8646-460001055d87', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '2e21a811-c6c9-45cd-9620-9a121465f424');
INSERT INTO "WatchlistItem" ("id", "stockId", "userId", "organizationId") VALUES ('c782850d-eaa0-4032-ad74-2f523f0c7114', '012a57c6-f23f-456f-8a2e-66db13450932', '9fd649fc-bce7-4731-8cb6-c9766c084322', 'e6a141dc-f559-49d9-a091-5716a9341c5a');
INSERT INTO "WatchlistItem" ("id", "stockId", "userId", "organizationId") VALUES ('f1f6e03d-9505-405f-b970-ce7835d873e2', '01a7351a-723f-4bd3-b399-086da038ebde', 'f2e36bf3-e27a-49c5-b7ab-a061809f1a2e', '578784af-f990-408e-8b5f-181500ee489d');
INSERT INTO "WatchlistItem" ("id", "stockId", "userId", "organizationId") VALUES ('aa45b9a3-5077-4db9-b65f-f46d1c87c527', 'b41e6294-be07-43e2-a855-de839d62cfa4', '9de9f0d4-229d-4804-a433-1ccb9640d5ca', '9876d09d-b8a7-42e1-a17f-646d96141bce');
INSERT INTO "WatchlistItem" ("id", "stockId", "userId", "organizationId") VALUES ('18d4554d-3e5e-4c28-a886-be231a1dd9fc', '6c062054-d32c-4e75-b89f-7e1fad42e09f', '9fd649fc-bce7-4731-8cb6-c9766c084322', '3d2f3e29-d683-4545-aa7a-ff5ef46f5884');
INSERT INTO "WatchlistItem" ("id", "stockId", "userId", "organizationId") VALUES ('ffd47b0c-4bec-4eb6-a522-7769e8a25c7e', '6c062054-d32c-4e75-b89f-7e1fad42e09f', 'f2e36bf3-e27a-49c5-b7ab-a061809f1a2e', '9876d09d-b8a7-42e1-a17f-646d96141bce');
INSERT INTO "WatchlistItem" ("id", "stockId", "userId", "organizationId") VALUES ('d4479a52-4b17-4e7c-b29f-2cc34421f6be', '01a7351a-723f-4bd3-b399-086da038ebde', 'ebe53e56-f8d7-4a3c-b490-96ff0a295ab9', '9901a4d8-79eb-42a9-a537-439fbbf32ca0');

INSERT INTO "Transaction" ("id", "amount", "type", "category", "description", "date", "userId", "organizationId") VALUES ('a3506b67-2952-432a-8f90-3e6771872070', '120.50', 'expense', 'entertainment', 'Movie night', '2024-06-06T06:19:53.373Z', '9fd649fc-bce7-4731-8cb6-c9766c084322', 'c0c28c27-da4d-4898-8ff8-9fa9c926f84f');
INSERT INTO "Transaction" ("id", "amount", "type", "category", "description", "date", "userId", "organizationId") VALUES ('09386138-3bf8-431e-8076-8a0e6bdad672', '300.75', 'income', 'salary', 'Monthly salary', '2024-07-10T01:55:29.834Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '578784af-f990-408e-8b5f-181500ee489d');
INSERT INTO "Transaction" ("id", "amount", "type", "category", "description", "date", "userId", "organizationId") VALUES ('ce19be5a-10ed-4bb1-9d69-50e7ee581a09', '300.75', 'income', 'salary', 'Weekly grocery shopping', '2024-10-06T12:45:44.543Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b092c8b5-3a6c-46fd-8874-193bd4c07172');
INSERT INTO "Transaction" ("id", "amount", "type", "category", "description", "date", "userId", "organizationId") VALUES ('f5e5f939-b0ac-4371-8764-11f1321c2554', '89.30', 'income', 'groceries', 'Weekly grocery shopping', '2025-02-26T15:16:18.568Z', 'f2e36bf3-e27a-49c5-b7ab-a061809f1a2e', '9901a4d8-79eb-42a9-a537-439fbbf32ca0');
INSERT INTO "Transaction" ("id", "amount", "type", "category", "description", "date", "userId", "organizationId") VALUES ('a4c7811f-1dc6-48b3-9742-bf20f77c49cf', '89.30', 'expense', 'entertainment', 'Electricity bill', '2025-02-21T02:39:05.753Z', '2d92e737-7bdd-4218-b75a-7bc2e75a5c54', 'c0c28c27-da4d-4898-8ff8-9fa9c926f84f');
INSERT INTO "Transaction" ("id", "amount", "type", "category", "description", "date", "userId", "organizationId") VALUES ('f04c21ea-d4e4-495c-83b7-b76333f0c588', '120.50', 'income', 'entertainment', 'Monthly salary', '2025-05-19T23:54:19.275Z', '4cad0c99-e85e-4a93-b290-947c71840e38', 'b092c8b5-3a6c-46fd-8874-193bd4c07172');
INSERT INTO "Transaction" ("id", "amount", "type", "category", "description", "date", "userId", "organizationId") VALUES ('590bdf3d-55e7-4c02-ba55-9fbe15adf61f', '120.50', 'income', 'freelance', 'Movie night', '2024-11-09T03:23:14.648Z', 'ebe53e56-f8d7-4a3c-b490-96ff0a295ab9', 'c9bae7e8-c2b2-4dfe-853c-f1dda965a762');
INSERT INTO "Transaction" ("id", "amount", "type", "category", "description", "date", "userId", "organizationId") VALUES ('1e485f24-ae71-4748-beca-1a172d552b30', '15.99', 'expense', 'groceries', 'Electricity bill', '2025-10-21T09:22:00.559Z', '4cad0c99-e85e-4a93-b290-947c71840e38', '578784af-f990-408e-8b5f-181500ee489d');
INSERT INTO "Transaction" ("id", "amount", "type", "category", "description", "date", "userId", "organizationId") VALUES ('71ea3e82-d3fa-41c4-9092-63a8454c63a3', '15.99', 'expense', 'entertainment', 'Electricity bill', '2025-09-10T15:16:59.286Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e6a141dc-f559-49d9-a091-5716a9341c5a');
INSERT INTO "Transaction" ("id", "amount", "type", "category", "description", "date", "userId", "organizationId") VALUES ('b40e7f06-8a70-4b51-ab1f-9228cdc12140', '89.30', 'income', 'groceries', 'Weekly grocery shopping', '2025-07-19T12:14:36.904Z', 'bfaa0b34-7ebc-47ae-80ca-5296ceb16d1c', 'c9bae7e8-c2b2-4dfe-853c-f1dda965a762');

INSERT INTO "FinancialGoal" ("id", "name", "targetAmount", "currentAmount", "deadline", "userId", "organizationId") VALUES ('fea97b12-b902-485c-99db-93f52c978634', 'Emergency Savings', '5000', '0', '2024-03-09T13:30:08.846Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e6a141dc-f559-49d9-a091-5716a9341c5a');
INSERT INTO "FinancialGoal" ("id", "name", "targetAmount", "currentAmount", "deadline", "userId", "organizationId") VALUES ('d7a2051c-8edb-4c0a-89ae-b8cb001013a3', 'College Tuition', '10000', '0', '2025-08-10T00:37:17.549Z', 'bfaa0b34-7ebc-47ae-80ca-5296ceb16d1c', '9901a4d8-79eb-42a9-a537-439fbbf32ca0');
INSERT INTO "FinancialGoal" ("id", "name", "targetAmount", "currentAmount", "deadline", "userId", "organizationId") VALUES ('2a861706-2cdc-4574-b7a0-a3846fb11611', 'Home Renovation', '25000', '0', '2024-08-13T22:05:13.855Z', '9de9f0d4-229d-4804-a433-1ccb9640d5ca', '578784af-f990-408e-8b5f-181500ee489d');
INSERT INTO "FinancialGoal" ("id", "name", "targetAmount", "currentAmount", "deadline", "userId", "organizationId") VALUES ('d18ea796-325f-41e0-9dad-899e76754ec6', 'Emergency Savings', '15000', '0', '2024-03-28T17:32:25.562Z', '9fd649fc-bce7-4731-8cb6-c9766c084322', '3d2f3e29-d683-4545-aa7a-ff5ef46f5884');
INSERT INTO "FinancialGoal" ("id", "name", "targetAmount", "currentAmount", "deadline", "userId", "organizationId") VALUES ('7ff63518-9210-4280-aa41-8250621f2c91', 'Home Renovation', '15000', '0', '2025-08-04T15:51:05.995Z', '4cad0c99-e85e-4a93-b290-947c71840e38', 'c9bae7e8-c2b2-4dfe-853c-f1dda965a762');
INSERT INTO "FinancialGoal" ("id", "name", "targetAmount", "currentAmount", "deadline", "userId", "organizationId") VALUES ('43820d4a-9a45-4211-be1f-e20f3de4312d', 'Home Renovation', '15000', '0', '2025-06-05T05:59:16.786Z', '4cad0c99-e85e-4a93-b290-947c71840e38', '9901a4d8-79eb-42a9-a537-439fbbf32ca0');
INSERT INTO "FinancialGoal" ("id", "name", "targetAmount", "currentAmount", "deadline", "userId", "organizationId") VALUES ('1fcad229-39e6-4f6a-abee-4b9ec58d8bf7', 'Emergency Savings', '25000', '0', '2025-02-10T03:49:11.658Z', 'ebe53e56-f8d7-4a3c-b490-96ff0a295ab9', 'c9bae7e8-c2b2-4dfe-853c-f1dda965a762');
INSERT INTO "FinancialGoal" ("id", "name", "targetAmount", "currentAmount", "deadline", "userId", "organizationId") VALUES ('69a91bac-aba1-47f8-8a17-f98599ac7e29', 'Home Renovation', '25000', '0', '2025-07-01T11:47:06.200Z', 'bfaa0b34-7ebc-47ae-80ca-5296ceb16d1c', '9876d09d-b8a7-42e1-a17f-646d96141bce');
INSERT INTO "FinancialGoal" ("id", "name", "targetAmount", "currentAmount", "deadline", "userId", "organizationId") VALUES ('30512b00-edb6-4cb9-ab4e-5ee21170b003', 'Vacation Fund', '25000', '0', '2024-09-03T13:12:56.057Z', 'f2e36bf3-e27a-49c5-b7ab-a061809f1a2e', '3d2f3e29-d683-4545-aa7a-ff5ef46f5884');
INSERT INTO "FinancialGoal" ("id", "name", "targetAmount", "currentAmount", "deadline", "userId", "organizationId") VALUES ('e11d36d3-6945-456e-867b-f9ecb9036ff1', 'Home Renovation', '10000', '0', '2025-08-11T08:34:06.759Z', '2d92e737-7bdd-4218-b75a-7bc2e75a5c54', 'e6a141dc-f559-49d9-a091-5716a9341c5a');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
