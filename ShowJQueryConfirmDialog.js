function ShowJQueryConfirmDialog(okCallback) {
	if (okCallback == "undefined" || okCallback == null) var okCallback = function(){};
	var dfd = $.Deferred();
	var strComment = "キャンセルを実行します。";
	dialogClass: "cancel-modal", // 追記
	// ダイアログのメッセージを設定
	$( "#show_dialog" ).html( strComment );
	
	// ダイアログを作成
	$( "#show_dialog" ).dialog({
		modal: true,
		buttons:[
			{
				text: '戻る',
				class:'btn-return',
				click: function() {
					//ボタンを押したときの処理
					$( this ).dialog( "close" );
					dfd.resolve("cancel");
				}
			},
			{
				text: '実行',
				class:'btn-commit',
				click: function() {
					//ボタンを押したときの処理
					$( this ).dialog( "close" );
					dfd.resolve("yes");
					okCallback();
				}
			}
		]

	});
		return dfd.promise();
}
