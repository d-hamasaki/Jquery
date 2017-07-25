	/*
		データを４＊４のテーブルに詰めて出力する
		４行出力またはコードが変更した場合、改ページ記号を出力する
	*/
	OPEN tableCur
	FETCH tableCur
	Set kaiPageCodeBU = ""
	Set dataCnt =1
	Set lineCnt =0

	While(SQLCODE=0){
		// コードが変更されていたら改ページする
		If kaiPageCodeBU '= kaiPageCode {
			// 改ページ処理
			If kaiPageCodeBU '= ""{
				<div><p style="text-align: center; font-size: 2.5em; color: red;">改ページ</p><div>
			}
			//見出し出力
			<div style="text-align: center;">
				<p style="font-size: 2.5em;">見出し出力</p>
				Set lineCnt = 0
			</div>
			//比較変数を退避
			Set kaiPageCodeBU = kaiPageCode
		}
		<table style="table-layout: fixed; border:none;">
		<tr>
			Set colCnt = 0
			For{
				<td style="border:none;">
					//データ出力
					<div id="lineCnt+colCnt" style="">
						<p>出力データ</p>
					</div>
				</td>
				Set colCnt = colCnt++
				FETCH tableCur
				If SQLCODE'=0 { QUIT }
				
				Set dataCnt = dataCnt++
				
				If kaiPageCodeBU '= kaiPageCode { QUIT }
				If colCnt = 4 { QUIT }
			}
		</tr>
		Set lineCnt = lineCnt++
		<p>行数+lineCnt</p>
		// 
		If lineCnt = 4
		{
			Set kaiPageCodeBU = "改ページ"
		}
		</table>
	}
	CLOSE tableCur
