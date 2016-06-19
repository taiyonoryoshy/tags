<?php

$allow_new = FALSE;
$label = $_GET['label'];
$count = $_GET['count'];

$result = array();
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

foreach ($tags as $key => $tag) {
  if (preg_match('/^' . preg_quote($label) . '.*$/', $tag)) {
    $result[] = $tag;
  }
}

if (!$allow_new) {
  foreach ($result as $key => $tag) {
    if ($count > 0 && $label == $tag) {
      unset($result[$key]);
      $count--;
    }
  }
}

echo json_encode($result);