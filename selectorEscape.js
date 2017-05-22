//チェックボックス複数選択抑止 チェックボックスなのに複数の選択を許容しない(name単位)
(function($){
	function selectorEscape(val){
		var hash = "";
		if (val.charAt(0) == "#" || val.charAt(0) == ".") {
			hash = val.charAt(0);
			val = val.substr(1);
		}
		return hash + val.replace(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~]/g, '\\$&');
	}
	$.checkOne = function(IDItem) {
		if (IDItem == undefined || IDItem == null) IDItem = "";
		var IDItem = selectorEscape(IDItem);
		$("#" + IDItem + " input[type=checkbox]").click(function(){
			var $obj = $(this);
			var name = $obj.attr("name");
			$("#" + IDItem + " input[name=" + name + "]").map(function(){
				if (!$obj.is($(this))) {
					$(this).prop("checked", false);
				}
			});
		});
	};
})(jQuery);
