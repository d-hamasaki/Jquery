
// 単純にUNICODE　で　各種ハイフン記号を　WINDOWSデフォルトのハイフン記号に変換置換する
// 
//ハイフン文字をハイフンマイナス記号に統一
hyphenConv = function(convStr){
	//（ダッシュ記号）
	var convStr = convStr.replace(/\u2012/g, "\uFF0D");
	//（短いダッシュ記号）
	var convStr = convStr.replace(/\u2013/g, "\uFF0D");
	//（長いダッシュ記号）
	var convStr = convStr.replace(/\u2014/g, "\uFF0D");
	//（横棒）
	var convStr = convStr.replace(/\u2015/g, "\uFF0D");
	//（マイナス記号）
	var convStr = convStr.replace(/\u2212/g, "\uFF0D");
	//（マイナス記号　MACデフォルト）
	var convStr = convStr.replace(/\u2022/g, "\uFF0D");
	return convStr;
}