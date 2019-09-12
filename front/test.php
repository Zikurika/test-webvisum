<?php

function arabicTOen($str) {
    $trans = array(
        "&#1632;" => "0",
        "&#1633;" => "1",
        "&#1634;" => "2",
        "&#1635;" => "3",
        "&#1636;" => "4",
        "&#1637;" => "5",
        "&#1638;" => "6",
        "&#1639;" => "7",
        "&#1640;" => "8",
        "&#1641;" => "9",
    );
    return strtr($str, $trans);
}


function engToRoman($number) {
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
    $numberStr=(string)$_POST["faNumber"];
    $engNumber = arabicTOen((string)$numberStr);
    $romanNumber = engToRoman($engNumber);
    echo "In Faris:".$numberStr."<br>";
    echo "In Arabic:".$engNumber."<br>";
    echo "In Roman:".$romanNumber."";
    
        
    
}

?>