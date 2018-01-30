<?php
    require_once('../../common/common/conn.php');  
    /* 
     *选择数据表  
     * */  
//   取前端参数
    $select = json_decode(file_get_contents('php://input'),true);

    if(empty($select['word']) && empty($select['property']) && $select['strokes'] == 0){
//  	全为空
    	$stmt = $conn->prepare("SELECT * FROM qmdd_words"); 
	
    }else if(empty($select['word']) && !empty($select['property']) && $select['strokes'] == 0){
//  	字空，五行有值 ，笔画0
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE property = :property"); 
    	$stmt->bindParam(':property', $select['property']);
    }else if(empty($select['word']) && !empty($select['property']) && $select['strokes'] != 0){
//  	字空，五行有值 ，笔画非0
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE property = :property and strokes =:strokes"); 
    	$stmt->bindParam(':property', $select['property']);
    	$stmt->bindParam(':strokes', $select['strokes']);
    }else if(empty($select['word']) && empty($select['property']) && $select['strokes'] != 0){
//  	字空，五行无值 ，笔画非0
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE strokes =:strokes"); 
    	$stmt->bindParam(':strokes', $select['strokes']);
    }
    else{
    	$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE WORD = :WORD"); 
    	$stmt->bindParam(':WORD', $select['word']);
    }
    
    $stmt->execute();
    // 设置结果集为关联数组
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    
    $dataarr = $stmt->fetchAll();  
    Response::json(1,'数据返回成功',$dataarr);  
    $conn = null;
?>