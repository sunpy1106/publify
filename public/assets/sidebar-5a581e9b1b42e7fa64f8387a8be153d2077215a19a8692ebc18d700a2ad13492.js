var bind_sortable=function(){$(".sortable").sortable({dropOnEmpty:!0,stop:function(){var t=$(this).sortable("serialize",{attribute:"data-sortable"}),e=$(this).data("callback_url");$.ajax({data:t,type:"POST",dataType:"script",url:e}).fail(function(){alert("Oups?")})}}),$(".draggable").draggable({connectToSortable:".sortable",helper:"clone",revert:"invalid"})};$(document).ready(function(){bind_sortable()});