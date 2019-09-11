<?php

function arabicTOen($str) {
    $arabic_eastern = array('٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩');
	$engNumber = array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
	return str_replace($arabic_eastern, $engNumber, $str);
}


function numberToRomanRepresentation($number) {
    $map = array('M' => 1000, 'CM' => 900, 'D' => 500, 'CD' => 400,
     'C' => 100, 'XC' => 90, 'L' => 50, 'XL' => 40, 'X' => 10, 
     'IX' => 9, 'V' => 5, 'IV' => 4, 'I' => 1);
    $returnValue = '';
    while ($number > 0) {
        foreach ($map as $roman => $int) {
            if($number >= $int) {
                $number -= $int;
                $returnValue .= $roman;
                break;
            }
        }
    }
    return $returnValue;
}

if(isset($_POST['submit'])){
    $number=$_POST["faNumber"];
    $engNumber = arabicTOen($_POST["faNumber"]);
    
        echo "<p>---".$engNumber."</p>";
        echo $number;
    
}

?>