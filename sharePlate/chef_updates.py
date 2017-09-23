from django.core.exceptions import ObjectDoesNotExist

from models import Foodlist
from models import Badge
from models import Purchases
import analyzer

def update_ratings(chef,comment):
    score  = analyzer.comment_analyzer(comment)
    total_entries = len(Foodlist.objects.filter(chef_id=chef))
    try:
        value = Badge.objects.get(user=chef);
    except ObjectDoesNotExist:
        value = Badge(user=chef,badge=0);

    new_val = float(float(value.badge*(total_entries-1)+score)/total_entries)
    value.badge = new_val;
    value.save();
