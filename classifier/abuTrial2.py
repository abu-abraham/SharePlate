import re
import string
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
        print words, frequency[words]
file.close()


# from sklearn.feature_extraction.text import CountVectorizer
# vectorizer = CountVectorizer();
# corpus = [
#     'This is the first document.',
#     'This is the second second document.',
#     'And the third one.',
#     'Is this the first document?',
# ]
#
# X = vectorizer.fit(corpus)
#
