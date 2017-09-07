import urllib2,cookielib
from bs4 import BeautifulSoup
import urllib2,cookielib
from bs4 import BeautifulSoup
import re
import enchant
from nltk.stem.snowball import SnowballStemmer

#site= "https://www.bbcgoodfood.com/recipes/category/cuisines"
def stage_one_Parser(site):
    #site = "https://en.wikipedia.org/wiki/List_of_cuisines"
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
    file = open("food_items","w");
    for string in soup.strings:
        file.write(repr(string))
    file.close()

def tokenize_from_file():
    frequency = {}
    document_text = open('food_items', 'r')
    text_string = document_text.read().lower()
    match_pattern = re.findall(r'\b[a-z]{3,15}\b', text_string)
    document_text.close();
    for word in match_pattern:
        count = frequency.get(word,0)
        frequency[word] = count + 1
    frequency_list = frequency.keys()
    file = open("refined_list","w");
    for words in frequency_list:
        if frequency[words] <= 10:
            file.write(words)
            file.write("\n")
    file.close()

def final_map_gen(site):
    site = "https://en.wikipedia.org/wiki/List_of_cuisines"
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
    temp_list=soup.find_all('h1');
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
        word_dic.setdefault(str(item).strip(),0)

    for item in star_list:
        word_dic[str(item).strip()] = 1;

    return word_dic;


def website_parser_map_gen(site):
    stage_one_Parser(site);
    tokenize_from_file();
    return final_map_gen(site);
