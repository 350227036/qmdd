<?php
    require_once('../../common/common/conn.php');  
    /* 
     *选择数据表  
     * */  
//   取前端参数
    $select = json_decode(file_get_contents('php://input'),true);

	$a = $select;
    if(empty($select['word'])){
    	$stmt = $conn->prepare("SELECT * FROM qmdd_words"); 
        $result=array(  
          'data'=>$a
        );  
    	echo json_encode($result, JSON_UNESCAPED_UNICODE);  

    }else{
    	$stmt = $conn->prepare("SELECT WORD FROM qmdd_words WHERE WORD = ':WORD'"); 
    	$stmt->bindParam(':WORD', $select['word']);
        $result=array(  
          'data'=>$a   
        );  
		echo json_encode($result, JSON_UNESCAPED_UNICODE);  
    }
    $conn = null;
?>