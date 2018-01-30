<?php
    require_once('../../common/common/conn.php');  
    /* 
     *选择数据表  
     * */  
//   取前端参数
    $delWord = json_decode(file_get_contents('php://input'),true);


	$stmt = $conn->prepare("delete from qmdd_words where wid=:wid"); 
	$stmt->bindParam(':wid', $delWord['wid']);
    $stmt->execute();
    $rows = $stmt->rowCount();
    // 设置结果集为关联数组
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    
//  $dataarr = $stmt->fetchAll();  
    $dataarr['rows']=$rows;
    Response::json(1,'数据返回成功',$dataarr);  
    $conn = null;
?>