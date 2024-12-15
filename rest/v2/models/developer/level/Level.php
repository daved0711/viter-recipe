<?php
class Level
{
    public $level_aid;
    public $level_is_active;
    public $level_title;  
    public $level_datetime;
    public $level_created;


    public $connection;
    public $lastInsertedId;
    public $level_start;
    public $level_total;
    public $level_search;
   
    public $tblLevel;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLevel = "recipe_level";
    }


   // read all
   public function readAll()
   {
     try {
       $sql = "select * from {$this->tblLevel} ";
       $sql .= "order by level_is_active desc, ";
       $sql .= "level_aid asc ";
       $query = $this->connection->query($sql);
     } catch (PDOException $ex) {
       $query = false;
     }
     return $query;
   }


      public function readLimit()
      {
        try {
          $sql = "select * from {$this->tblLevel} ";
           $sql .= "order by level_is_active desc, ";
           $sql .= "level_title asc ";
          $sql .= "limit :start, ";
          $sql .= ":total ";
          $query = $this->connection->prepare($sql);
          $query->execute([
              "start" => $this->level_start - 1,
              "total" => $this->level_total,
          ]);
      } catch (PDOException $ex) {
          $query = false;
      }
      return $query;
  }
      public function readById()
      {
          try {
              $sql = "select * from {$this->tblLevel} ";
              $sql .= "where level_aid = :level_aid ";
              $query = $this->connection->prepare($sql);
              $query->execute([
                  "level_aid" => $this->level_aid,
              ]);
          } catch (PDOException $ex) {
              $query = false;
          }
          return $query;
      }


      public function create()
  {
    try {
      $sql = "insert into {$this->tblLevel} ";
      $sql .= "(level_is_active, ";
      $sql .= "level_title, ";
      $sql .= "level_created, ";
      $sql .= "level_datetime ) values ( ";
      $sql .= ":level_is_active, ";
      $sql .= ":level_title, ";
      $sql .= ":level_created, ";
      $sql .= ":level_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "level_is_active" => $this->level_is_active,
        "level_title" => $this->level_title,
        "level_datetime" => $this->level_datetime,
        "level_created" => $this->level_created,


      ]);
      $this->lastInsertedId = $this->connection->lastInsertId();
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function checkName()
  {
    try {
      $sql = "select title_name from {$this->tblTitle} ";
      $sql .= "where title_name = :title_name ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "title_name" => "{$this->title_name}",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function update()
  {
    try {
      $sql = "update {$this->tblLevel} set ";
      $sql .= "level_title = :level_title, ";
      $sql .= "level_datetime = :level_datetime ";
      $sql .= "where level_aid  = :level_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "level_title" => $this->level_title,
        "level_datetime" => $this->level_datetime,
        "level_aid" => $this->level_aid
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function delete()
  {
    try {
      $sql = "delete from {$this->tblLevel} ";
      $sql .= "where level_aid = :level_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "level_aid" => $this->level_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function active()
    {
    try {
    $sql = "update {$this->tblLevel} set ";
    $sql .= "level_is_active = :level_is_active, ";
    $sql .= "level_datetime = :level_datetime ";
    $sql .= "where level_aid  = :level_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "level_is_active" => $this->level_is_active,
    "level_datetime" => $this->level_datetime,
    "level_aid" => $this->level_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }







   
}





