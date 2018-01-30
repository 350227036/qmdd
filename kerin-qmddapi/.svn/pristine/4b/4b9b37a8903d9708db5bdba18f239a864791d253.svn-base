<?php
    require_once('../../common/common/conn.php');  
    /* 
     *选择数据表  
     * 
		lastName:'陈',
		word1S:'6',
		word2S:'10',
		word1P:'木',
		word2P:'水',
     * */  
//   取前端参数
    $select = json_decode(file_get_contents('php://input'),true);
	$arr1=array();
	$arr2=array();

    if(!empty($select['word1P']) && empty($select['word2P']) && $select['word1S'] == 0 && $select['word2S'] == 0){
//  	字1 有五行 字2无五行 名1笔画为0 名2笔画为0
//		取字1数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE property = :property"); 
    	$stmt->bindParam(':property', $select['word1P']);
    	$stmt->execute();
// 		设置结果集为关联数组
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr1 = $stmt->fetchAll();
//		取字2数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words"); 
    	$stmt->execute();
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr2 = $stmt->fetchAll();
    }else if(!empty($select['word1P']) && !empty($select['word2P']) && $select['word1S'] == 0 && $select['word2S'] == 0){
//  	字1 有五行 字2有五行 名1笔画为0 名2笔画为0
//		取字1数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE property = :property"); 
    	$stmt->bindParam(':property', $select['word1P']);
    	$stmt->execute();
    	// 		设置结果集为关联数组
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr1 = $stmt->fetchAll();
//		取字2数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE property = :property"); 
    	$stmt->bindParam(':property', $select['word2P']);
    	$stmt->execute();
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr2 = $stmt->fetchAll();
    }else if(!empty($select['word1P']) && !empty($select['word2P']) && $select['word1S'] != 0 && $select['word2S'] == 0){
//  	字1 有五行 字2有五行 名1笔画非0 名2笔画为0
//		取字1数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE property = :property and strokes = :strokes"); 
    	$stmt->bindParam(':property', $select['word1P']);
    	$stmt->bindParam(':strokes', $select['word1S']);
    	$stmt->execute();
    	// 		设置结果集为关联数组
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr1 = $stmt->fetchAll();
//		取字2数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE property = :property"); 
    	$stmt->bindParam(':property', $select['word2P']);
    	$stmt->execute();
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr2 = $stmt->fetchAll();
    }else if(!empty($select['word1P']) && !empty($select['word2P']) && $select['word1S'] != 0 && $select['word2S'] != 0){
//  	字1 有五行 字2有五行 名1笔画非0 名2笔画非0
//		取字1数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE property = :property and strokes = :strokes"); 
    	$stmt->bindParam(':property', $select['word1P']);
    	$stmt->bindParam(':strokes', $select['word1S']);
    	$stmt->execute();
    	// 		设置结果集为关联数组
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr1 = $stmt->fetchAll();
//		取字2数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE property = :property and strokes = :strokes"); 
    	$stmt->bindParam(':property', $select['word2P']);
    	$stmt->bindParam(':strokes', $select['word2S']);
    	$stmt->execute();
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr2 = $stmt->fetchAll();
    }else if(!empty($select['word1P']) && !empty($select['word2P']) && $select['word1S'] == 0 && $select['word2S'] != 0){
//  	字1 有五行 字2有五行 名1笔画为0 名2笔画非0
//		取字1数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE property = :property"); 
    	$stmt->bindParam(':property', $select['word1P']);
    	$stmt->execute();
    	// 		设置结果集为关联数组
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr1 = $stmt->fetchAll();
//		取字2数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE property = :property and strokes = :strokes"); 
    	$stmt->bindParam(':property', $select['word2P']);
    	$stmt->bindParam(':strokes', $select['word2S']);
    	$stmt->execute();
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr2 = $stmt->fetchAll();
    }else if(empty($select['word1P']) && empty($select['word2P']) && $select['word1S'] != 0 && $select['word2S'] != 0){
//  	字1 无五行 字2无五行 名1笔画为0 名2笔画非0
//		取字1数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE strokes = :strokes"); 
    	$stmt->bindParam(':strokes', $select['word1S']);
    	$stmt->execute();
    	// 		设置结果集为关联数组
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr1 = $stmt->fetchAll();
//		取字2数据
		$stmt = $conn->prepare("SELECT * FROM qmdd_words WHERE strokes = :strokes"); 
    	$stmt->bindParam(':strokes', $select['word2S']);
    	$stmt->execute();
    	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    	$arr2 = $stmt->fetchAll();
    } 
    
//  $stmt->execute();

    
    $dataarr = array($arr1,$arr2);  
    Response::json(1,'数据返回成功',$dataarr);  
    $conn = null;
?>