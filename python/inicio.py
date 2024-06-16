import pandas as pd
from math import sqrt
import numpy as np
import matplotlib.pyplot as plt
import json,sys
# import os 
# dir_path = os.path.dirname(os.path.realpath(__file__))
# print(dir_path)
#Se cae si se agregan 2 machu picchu con 5 de rating

from pathlib import Path
filepath = Path(__file__).parent 
viajes = pd.read_csv(filepath / 'dataset1bu3.csv')
rating=pd.read_csv(filepath / 'ratings.csv')
# print('viajes:\n',viajes.head())
# print (viajes.columns)
viajes['tags']=viajes.tags.str.split('|')
viajes_co=viajes.copy()
for index,row in viajes.iterrows():
  for tag in row['tags']:
    viajes_co.at[index,tag]=1
viajes_co=viajes_co.fillna(0)
#print('Viajes Codificados:',viajes_co)
aa = sys.stdin.read()
usuario_en=json.loads(aa)
entrada_viajes=pd.DataFrame(usuario_en)
#print('Viajes Usuario:\n',entrada_viajes)
Id=viajes[viajes['title'].isin(entrada_viajes['title'].tolist())]
entrada_viajes=pd.merge(Id,entrada_viajes)

viajes_usuario=viajes_co[viajes_co['viajeid'].isin(entrada_viajes['viajeid'].tolist())]

#print('Viajes Usuario Codificados:',viajes_usuario)

viajes_usuario=viajes_usuario.reset_index(drop=True)
tabla_tags = viajes_usuario.drop(['viajeid', 'title', 'tags'], axis=1)
#print('Tabla de Categorias:\n',tabla_tags)
perfil_usu = tabla_tags.transpose().dot(entrada_viajes['rating'])
#print('Categoría que el usuario prefiere:\n',perfil_usu)
tags=viajes_co.set_index(viajes_co['viajeid'])
tags = tags.drop(['viajeid', 'title', 'tags'], axis=1)
#print('Tags:\n',tags.head())
#tags.shape
recom=((tags*perfil_usu).sum(axis=1))/(perfil_usu.sum())
#print('Recomendaciones:\n',recom.head())
recom=recom.sort_values(ascending=False)
#print('Recomendaciones En Orden:\n',recom.head())
final=viajes.loc[viajes['viajeid'].isin(recom.head(5).keys())]
nfinal=final[['title']]
# nfinal = pd.DataFrame.from_dict(nfinal)
a = nfinal.to_json()
print(a)


