import discord
from discord.channel import TextChannel
from discord.flags import Intents

default_intents = discord.Intents.default()
default_intents.members = True
client = discord.Client(intents=default_intents)

@client.event
async def on_ready():
    print("Le bot est prêt")

@client.event
async def on_message(message):
    if message.content.lower() == "ping" :
        await message.channel.send("pong")

@client.event
async def on_member_join(member):
    general_channel: discord.TextChannel = client.get_channel(864561094412206114)
    await general_channel.send(content="Bonjour {member} !")


client.run("ODY0NzgyMzczNjY0MzI1NjQy.YO6dWA.q69hZszdoJXjrYwNmvkYMhkCmHM")