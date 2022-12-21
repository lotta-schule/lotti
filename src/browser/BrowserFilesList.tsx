import * as React from 'react';
import {
  faFileImage,
  faFilePdf,
  faFileWord,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../icon';
import clsx from 'clsx';

import styles from './BrowserFilesList.module.scss';

export type BrowserFilesListProps = {
  narrow?: boolean;
};

export const BrowserFilesList = React.memo(
  ({ narrow }: BrowserFilesListProps) => {
    return (
      <ul className={clsx(styles.root, { [styles.narrow]: narrow })}>
        <li className={styles.selected}>
          <div className={styles.fileIcon}>
            <Icon icon={faFileImage} />
          </div>
          <div className={styles.fileName}>Dateiname 1</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
            <Icon icon={faTrashCan} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFileImage} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFilePdf} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFilePdf} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFileImage} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFileImage} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFilePdf} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFilePdf} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFileWord} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFileWord} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFileWord} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFileWord} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFileImage} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
        <li>
          <div className={styles.fileIcon}>
            <Icon icon={faFileImage} />
          </div>
          <div className={styles.fileName}>Dateiname 2</div>
          <div className={styles.fileEdit}>
            <Icon icon={faPen} />
          </div>
        </li>
      </ul>
    );
  }
);
BrowserFilesList.displayName = 'BrowserFilesList';
