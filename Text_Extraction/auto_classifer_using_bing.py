import urllib2
import requests
import json
import Parser

def stop_word_get():
    with open('list_waste') as f:
        content = f.readlines();
    f.close()
    waste_list = []
    for c in content:
        waste_list.append(str(c).strip());

    return waste_list


keyBing = '76a6e4a9b4ce458eb52840205bc212b5'
r=requests.get("https://api.cognitive.microsoft.com/bing/v5.0/search?q=different types of cusines&count=10&offset=0&mkt=en-us&safesearch=Moderate", headers={"Ocp-Apim-Subscription-Key":"76a6e4a9b4ce458eb52840205bc212b5"});
i = 0;
word_map_prev = {}
current_map = {}
while i<10:
    print "Now generating for "+str(r.json()['webPages']['value'][i]['url'])
    word_map = Parser.website_parser_map_gen(str(r.json()['webPages']['value'][i]['url']));
    if len(word_map_prev)<=0:
        word_map_prev = word_map
    for key in word_map:
        if key in word_map_prev:
            current_map[key]= int(word_map_prev[key])+1;
    word_map_prev = current_map;
    i+=1;

stop_word_list = stop_word_get()+['Search', 'Interaction', 'join', 'Views', 'edit', 'Tools', 'privacy', 'Languages', 'state', 'References', 'Contents',]
print stop_word_list
for word in word_map_prev:
    if int(word_map_prev[word])>=4 and word not in stop_word_list:
        print word


