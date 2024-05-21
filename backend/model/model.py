from dotenv import load_dotenv
import os

load_dotenv()

from langchain_fireworks import ChatFireworks
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate


model = ChatFireworks(model="accounts/fireworks/models/mixtral-8x7b-instruct")


system_template = "You are a helpfull assistant"
prompt_template = ChatPromptTemplate.from_messages([
    ('system', system_template),
    ('user', '{text}')
])

parser = StrOutputParser()

chain = prompt_template | model | parser