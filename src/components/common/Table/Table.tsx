import React from 'react';

import styles from "./Table.module.css";

export interface Column<T> {
   header: string;
   accessor: keyof T;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  handleEdite?: (item: T) => void;
  handleDelete?: (item: T) => void;
}

export const Table = <T,>({ columns, data, handleEdite, handleDelete }: TableProps<T>): JSX.Element => {
   return (
    <table className={styles.table}>

      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className={styles.th}>{column.header}</th>
          ))}
          {(handleEdite || handleDelete) && <th className={styles.th}>Ações</th>}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column,columnIndex) => (
              column.accessor == "image"?
              <td key={columnIndex} className={styles.td}>
                <img src={item[column.accessor] as string} alt="imagem"/>
              </td>
              :
              <td key={columnIndex} className={styles.td}>{item[column.accessor]}</td>
            ))}
             {(handleEdite || handleDelete) && (
              <td className={styles.td}>
                {handleEdite && <button onClick={() => handleEdite(item)}>Editar</button>}
                {handleDelete && <button onClick={() => handleDelete(item)}>Deletar</button>}
            </td>
             )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};