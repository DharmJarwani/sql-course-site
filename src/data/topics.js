// 50 SQL topics, level-wise organised
const topics = [
  /* ---------- Level 1: Basics ---------- */

  { level: 1, title: "SELECT",            file: "/pages/select.html" },
  { level: 1, title: "SELECT DISTINCT",   file: "/pages/level-1/select-distinct.html" },
  { level: 1, title: "WHERE",             file: "/pages/where.html" },
  { level: 1, title: "AND, OR, NOT",      file: "/pages/level-1/and-or-not.html" },
  { level: 1, title: "ORDER BY",          file: "/pages/level-1/orderby.html" },
  { level: 1, title: "LIMIT / TOP",       file: "/pages/level-1/limit-top.html" },
  { level: 1, title: "LIKE",              file: "/pages/level-1/like.html" },
  { level: 1, title: "IN",                file: "/pages/level-1/in.html" },
  { level: 1, title: "BETWEEN",           file: "/pages/level-1/between.html" },
  { level: 1, title: "IS NULL",           file: "/pages/level-1/is-null.html" },

  /* ---------- Level 2: Aggregations ---------- */
  { level: 2, title: "COUNT, AVG, SUM",   file: "/pages/level-2/count-avg-sum.html" },
  { level: 2, title: "MIN and MAX",       file: "/pages/level-2/min-max.html" },
  { level: 2, title: "GROUP BY",          file: "/pages/level-2/groupby.html" },
  { level: 2, title: "HAVING",            file: "/pages/level-2/having.html" },
  { level: 2, title: "ALIASES",           file: "/pages/level-2/aliases.html" },
  { level: 2, title: "WILDCARDS",         file: "/pages/level-2/wildcards.html" },

  /* ---------- Level 3: DML ---------- */
  
  { level: 3, title: "INSERT INTO SELECT",    file: "/pages/level-3/insert-select.html" },
  { level: 3, title: "UPDATE",                file: "/pages/level-3/update.html" },
  { level: 3, title: "DELETE",                file: "/pages/level-3/delete.html" },

  /* ---------- Level 4: Joins & Sub-queries ---------- */
  { level: 4, title: "INNER JOIN",    file: "/pages/level-4/inner-join.html" },
  { level: 4, title: "LEFT JOIN",     file: "/pages/level-4/left-join.html" },
  { level: 4, title: "RIGHT JOIN",    file: "/pages/level-4/right-join.html" },
  { level: 4, title: "FULL JOIN",     file: "/pages/level-4/full-join.html" },
  { level: 4, title: "SELF JOIN",     file: "/pages/level-4/self-join.html" },
  { level: 4, title: "UNION",         file: "/pages/level-4/union.html" },
  { level: 4, title: "EXISTS",        file: "/pages/level-4/exists.html" },
  { level: 4, title: "ANY, ALL",      file: "/pages/level-4/any-all.html" },

  /* ---------- Level 5: Table & Constraints ---------- */
  // { level: 5, title: "CREATE TABLE",  file: "/pages/create-table.html" },
  // { level: 5, title: "ALTER TABLE",   file: "/pages/alter-table.html" },
  // { level: 5, title: "DROP TABLE",    file: "/pages/drop-table.html" },
  { level: 5, title: "CONSTRAINTS",   file: "/pages/level-5/constraints.html" },
  { level: 5, title: "PRIMARY KEY",   file: "/pages/level-5/primary-key.html" },
  { level: 5, title: "FOREIGN KEY",   file: "/pages/level-5/foreign-key.html" },
  { level: 5, title: "UNIQUE",        file: "/pages/level-5/unique.html" },
  { level: 5, title: "NOT NULL",      file: "/pages/level-5/not-null.html" },
  { level: 5, title: "CHECK",         file: "/pages/level-5/check.html" },
  { level: 5, title: "DEFAULT",       file: "/pages/level-5/default.html" },

  /* ---------- Level 6: DB Management ---------- */
  // { level: 6, title: "CREATE DATABASE", file: "/pages/create-db.html" },
  // { level: 6, title: "DROP DATABASE",   file: "/pages/drop-db.html" },
  { level: 6, title: "BACKUP DATABASE", file: "/pages/level-6/backup-db.html" },

  /* ---------- Level 7: Stored Logic ---------- */
  { level: 7, title: "CASE",              file: "/pages/level-7/case.html" },
  { level: 7, title: "NULL Functions",    file: "/pages/level-7/null-functions.html" },
  { level: 7, title: "Stored Procedures", file: "/pages/level-7/stored-procedures.html" },
  { level: 7, title: "Comments",          file: "/pages/level-7/comments.html" },
  { level: 7, title: "Operators",         file: "/pages/level-7/operators.html" },
  { level: 7, title: "Auto Increment",    file: "/pages/level-7/auto-increment.html" },

  /* ---------- Level 8: Meta / Tools ---------- */
  { level: 8, title: "Index",        file: "/pages/level-8/index.html" },
  { level: 8, title: "Views",        file: "/pages/level-8/views.html" },
  { level: 8, title: "Dates",        file: "/pages/level-8/dates.html" },
  { level: 8, title: "Hosting",      file: "/pages/level-8/hosting.html" },
  { level: 8, title: "Data Types",   file: "/pages/level-8/data-types.html" },
  { level: 8, title: "SQL Injection",file: "/pages/level-8/injection.html" }
];

export default topics;
