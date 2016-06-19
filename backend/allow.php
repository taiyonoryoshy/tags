<?php

$label = $_GET['label'];
$count = $_GET['count'];

$result = FALSE;

$tags = array(
  'java',
  'java',
  'java',
  'javascript',
  'javascript',
  'actionscript',
  'c++',
  'scala',
  'scala',
  'python',
  'php',
  'c',
  'c#',
);

$count2 = 0;
foreach ($tags as $key => $tag) {
  if ($label == $tag) {
    $count2++;
  }
}

if ($count2 != 0 && $count2 > $count) {
  $result = TRUE;
}

echo json_encode($result);