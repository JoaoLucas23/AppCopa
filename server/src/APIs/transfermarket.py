import requests
from bs4 import BeautifulSoup
import json
import re

jsonFile = open("jogadores.json", "w", encoding="utf-8")
jsonFile.write("")
jsonFile.close()

"""
To make the request to the page we have to inform the
website that we are a browser and that is why we
use the headers variable
"""
headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36'}

# endereco_da_pagina stands for the data page address
endereco_da_pagina = "https://www.transfermarkt.com.br/costa-rica/startseite/verein/8497"

# In the objeto_response variable we will the download of the web page
objeto_response = requests.get(endereco_da_pagina, headers=headers)

"""
Now we will create a BeautifulSoup object from our object_response.
The 'html.parser' parameter represents which parser we will use when creating our object,
a parser is a software responsible for converting an entry to a data structure.
"""
pagina_bs = BeautifulSoup(objeto_response.content, 'html.parser')

tabela_jogadores = pagina_bs.find_all('span', {'class':"hide-for-small"})

links = []
jogadores = []

for jogador in tabela_jogadores:
    j = jogador.find('a').text
    href = pagina_bs.find('a', {'title': j})['href']
    links.append(href)

for link in links:
    endereco_da_pagina = "https://www.transfermarkt.com.br" + link
    objeto_response = requests.get(endereco_da_pagina, headers=headers)
    pagina_jogador = BeautifulSoup(objeto_response.content, 'html.parser')
    apelido = pagina_jogador.find('h1', {'class': 'data-header__headline-wrapper'}).text
    apelido = apelido.replace("\n", "").replace("  ", "")
    apelido = re.sub(r'#*[0-9]',"", apelido)
    data_nascimento = pagina_jogador.find('span', {'itemprop': 'birthDate'}).text.replace("\n", "").replace("  ", "").split("(")[0]
    data = data_nascimento.split("/")[2]+"-"+data_nascimento.split("/")[1]+"-"+data_nascimento.split("/")[0]
    altura = pagina_jogador.find('span', {'itemprop': 'height'}).text.replace("\n", "").replace("  ", "").split("m")[0]
    altura = int(altura.replace(",", ""))
    posicao = pagina_jogador.findAll('span', {'class': 'info-table__content info-table__content--bold'})
    posicao = posicao[6].text.replace("\n", "").replace("  ", "")
    imagem = pagina_jogador.find('img', {'class': "data-header__profile-image"})["src"]
    pais = "Costa Rica"
    jogador = {
        'nome': apelido,
        'apelido': apelido,
        'data_nascimento': data,
        'altura': altura,
        'posicao': posicao,
        'pais': pais,
        'imagem': imagem
    }
    jogadores.append(jogador)
    

jsonString = json.dumps(jogadores, indent=4, ensure_ascii=False)
jsonFile = open("jogadores.json", "w", encoding="utf-8")
jsonFile.write(jsonString)
jsonFile.close()