from re import M
import os
from discord import channel, message
import discord
from discord.ext import commands
from dotenv import load_dotenv

bot = commands.Bot(command_prefix="!")


load_dotenv(dotenv_path="config")

@bot.event
async def on_ready():
    print("Le bot est prêt")


#Permet de supprimer des messages. 
@bot.command(name="del")
async def delete(ctx, number_of_messages: int):
    messages = await ctx.channel.history(limit=number_of_messages + 1).flatten()

    for each_message in messages:
        await each_message.delete()


@bot.event
async def on_raw_reaction_add(payload):
    if payload.member.bot:
        return
    if payload.channel_id == 864835600065495050:
        if payload.message_id == 864835783487127562: 
            if payload.emoji.name == '😏':
                guild: discord.Guild = bot.get_guild(864561094412206111)
                role: discord.Role = guild.get_role(864836534871392286)

                await payload.member.add_roles(role, reason='Normal')

            if payload.emoji.name == '💻':
                guild: discord.Guild = bot.get_guild(864561094412206111)
                role: discord.Role = guild.get_role(864847327542116352)

                await payload.member.add_roles(role, reason='Normal')

            if payload.emoji.name == '🎨':
                guild: discord.Guild = bot.get_guild(864561094412206111)
                role: discord.Role = guild.get_role(864847385724715048)

                await payload.member.add_roles(role, reason='Normal')



bot.run(os.getenv("TOKEN"))
















#default_intents = discord.Intents.default()
#default_intents.members = True
#client = discord.Client(intents=default_intents)
 


#@client.event
#async def on_ready():
#    print("Le bot est prêt")

#@client.event
#async def on_message(message):
#    if message.content.lower() == "marco" :
#        await message.channel.send("POLOOOOOOO")

#@client.event
#async def on_member_join(member):
#    general_channel : discord.TextChannel = client.get_channel(864794839219961896)
#    await general_channel.send(content=f"Bienvenue sur le serveur {member.display_name} !")

#@client.event
#async def on_member_join(member):
#    general_channel : discord.TextChannel = client.get_channel(864794839219961896)
#    await general_channel.send(content=f"Bienvenue sur le serveur {member.display_name} !")

#@client.event
#async def on_member_remove(member):
#    general_channel : discord.TextChannel = client.get_channel(864794839219961896)
#    await general_channel.send(content=f"Bah vas y casse toi {member.display_name}, sale fils de ta mère !")