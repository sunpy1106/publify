(function(){var t;t=function(t,e,i,n){var o;return o=t%10,1===o&&(1===t||t>20)?e:o>1&&5>o&&(t>20||10>t)?i:n},jQuery.timeago.settings.strings.sr={prefixAgo:"\u043f\u0440\u0435",prefixFromNow:"\u0437\u0430",suffixAgo:null,suffixFromNow:null,second:"\u0441\u0435\u043a\u0443\u043d\u0434",seconds:function(e){return t(e,"%d \u0441\u0435\u043a\u0443\u043d\u0434","%d \u0441\u0435\u043a\u0443\u043d\u0434\u0435","%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438")},minute:"\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442",minutes:function(e){return t(e,"%d \u043c\u0438\u043d\u0443\u0442","%d \u043c\u0438\u043d\u0443\u0442\u0430","%d \u043c\u0438\u043d\u0443\u0442\u0430")},hour:"\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442",hours:function(e){return t(e,"%d \u0441\u0430\u0442","%d \u0441\u0430\u0442\u0430","%d \u0441\u0430\u0442\u0438")},day:"\u0458\u0435\u0434\u0430\u043d \u0434\u0430\u043d",days:function(e){return t(e,"%d \u0434\u0430\u043d","%d \u0434\u0430\u043d\u0430","%d \u0434\u0430\u043d\u0430")},month:"\u043c\u0435\u0441\u0435\u0446 \u0434\u0430\u043d\u0430",months:function(e){return t(e,"%d \u043c\u0435\u0441\u0435\u0446","%d \u043c\u0435\u0441\u0435\u0446\u0430","%d \u043c\u0435\u0441\u0435\u0446\u0438")},year:"\u0433\u043e\u0434\u0438\u043d\u0443 \u0434\u0430\u043d\u0430",years:function(e){return t(e,"%d \u0433\u043e\u0434\u0438\u043d\u0443","%d \u0433\u043e\u0434\u0438\u043d\u0435","%d \u0433\u043e\u0434\u0438\u043d\u0430")},wordSeparator:" "}}).call(this);