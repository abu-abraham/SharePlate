import urllib2,cookielib
from bs4 import BeautifulSoup
import re
import enchant
from nltk.stem.snowball import SnowballStemmer

site= "https://www.bbcgoodfood.com/recipes/category/cuisines"
hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
       'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
       'Accept-Encoding': 'none',
       'Accept-Language': 'en-US,en;q=0.8',
       'Connection': 'keep-alive'}

req = urllib2.Request(site, headers=hdr)

try:
    page = urllib2.urlopen(req)
except urllib2.HTTPError, e:
    print e.fp.read()

content = page.read()
soup = BeautifulSoup(content, 'html.parser')
star_list = [];
file = open("food_items","w");
temp_list=soup.find_all('h1')
i=1;
while len(temp_list)>0:
    star_list.append(temp_list);
    i+=1;
    val = "h"+str(i)
    temp_list = soup.find_all(val)


soup = BeautifulSoup(str(star_list), 'html.parser')
dict = enchant.Dict('en_US')
stem = SnowballStemmer("english");

star_list = [];

for string in soup.strings:
    refined = str(string).strip()
    if refined.isalnum():
        star_list.append(str(refined))

word_dic = {};

with open('refined_list') as f:
    content = f.readlines();
f.close()

for item in set(content):
    word_dic.setdefault(str(item).strip())

for item in star_list:
    word_dic[str(item).strip()] = True;

print word_dic
