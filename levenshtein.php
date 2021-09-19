<?php


$string = "Как делллла ?";

$words = array("как", "дела");

$explode = explode(" ", $string);

foreach ($explode as $k => $word) {
	$shortest = -1;
	if (iconv_strlen($word) > 2) {
		$word = mb_strtolower($word);
		foreach ($words as $key) {
			$key = mb_strtolower($key);
			$lev = levenshtein($key, $word);
			if ($lev == 0) {
				$explode[$k] = $key;
				$shortest = $lev;
				break;
			}
			if ($lev <= $shortest || $shortest < 0) {
				$explode[$k] = "<b>" . $key . "</b>";
				$shortest = $lev;
			}
		}
	}
}

echo "Ваша фраза: $string <br>";

echo "Возможно вы имели ввиду: " . implode(" ", $explode) . "<br>";

?>