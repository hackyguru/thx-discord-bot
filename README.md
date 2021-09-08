# Thx Discord Bot for incentivizing meet and greet

The bot is integrated with the presently available discord bot of THX. The THX Bot can be used to reward message authors with ERC20 tokens from a pool by reacting with certain emojies on their contributions in a channel. You can also conduct polls through the bot by using /poll command. It is possible to host rewarded polls where the community members can vote and the highest voted mention would automatically be rewarded.

### Features and improvements
- The previous bot (https://github.com/thxprotocol/discord-bot) did not greet the users upon arrival to the server. I implemented a greeting intent which would welcome a user with a simple image and a ping upon arrival.
- To understand the opinions of users, I added a poll widget which can be used by the admins for creating polls.
- The command pallete has better description and workflow of creating wallet, linking an existing wallet or getting information about your connected wallet.
- To incentivize meet and greet with community collaboration, I have added a number of commands.


### Prerequisites

#### 1. [Signup for a THX account](https://www.thx.network/signup)

Signup is free while we are in beta so let's give it a try!

#### 2. [Create an Application & ERC20 pool](https://dashboard.thx.network)

The application is used to authorize with our API. You can create your own ERC20 token with a limited or unlimited supply and deploy it in a fresh asset pool. Deploying your smart contract can take up to ~20 seconds.

> Make sure to edit you asset pool after deployment and disable the governance setting. This feature is currently not supported by the THX Bot.

#### 3. [Invite THX Bot to your guild](https://discord.com/api/oauth2/authorize?client_id=834083368370700299&permissions=8&scope=bot)

By clicking this link you will be asked which guild the THX Bot should join.
