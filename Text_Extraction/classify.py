import nltk as nltk
from sklearn.cluster import KMeans
import numpy as np
import re
import random


def clustering(input_list):
    ran_choice = random.sample(range(1, len(input_list)), 8)
    centroids = ['chinese','culinary','regional','japanese','indian','bread','british','french','italian']
    centroid_word_map = {};
    # for i in range(0,7):
    #     centroids.append(input_list[ran_choice[i]])
    for word in input_list:
        min = 400;
        choice = "";
        for c in centroids:
            if min >= nltk.edit_distance(word,c):
                choice = c;
                min = nltk.edit_distance(word,c);
        centroid_word_map.setdefault(choice, []).append(word);
    for item in centroids:
        print "Centroid is "+str(item)
        print centroid_word_map[item]


with open('food_items') as f:
        content = f.readlines();
content_list = str(content).split(",");
final_list = [];
for line in content_list:
    line = line.translate(None, " ?.'!/\;:")
    line = re.findall('[A-Z][^A-Z]*', line)
    line = " ".join(line)
    final_list.append(line);
clustering(final_list)



#nltk.edit_distance("chicken","muken")

