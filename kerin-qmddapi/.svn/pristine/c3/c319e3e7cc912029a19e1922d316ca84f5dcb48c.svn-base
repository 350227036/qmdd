<?php
    header("Content-type:text/html;charset=utf-8");
    header('content-type:application/json;charset=utf8');
    header('Access-Control-Allow-Origin: *');
    $servername="127.0.0.1";  
    $username="root";  
    $password="root";  
    $dbname="qmdd_db";  
    
	try {
	    $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//	    $stmt = $conn->prepare("SELECT * FROM qmdd_words;"); 
//	    $stmt->execute();
//	    echo "连接成功"; 
	}
	catch(PDOException $e)
	{
//	    echo $e->getMessage();
	    echo "数据库连接失败！";  
	}
    if(!$conn){  
        echo "数据库连接失败！";  
    }
      
    
    class Response{  
        public static function json($code,$message="",$data=array()){  
            $result=array(  
              'code'=>$code,  
              'message'=>$message,  
              'data'=>$data   
            );  
            //输出json  
//          print_r($result);
            echo json_encode($result, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
//          echo json_encode($result, JSON_UNESCAPED_UNICODE);  
            exit;  
        }  
    }  
    
?>