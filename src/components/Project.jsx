import React from 'react';
import styles from './project.module.css';
import ReactIcon from './techIcons/ReactIcon';
import FlaskIcon from './techIcons/FlaskIcon';
import MaterialUiIcon from './techIcons/MaterialUiIcon';
import TensorflowIcon from './techIcons/TensorflowIcon';
import PandasIcon from './techIcons/PandasIcon';
import NumpyIcon from './techIcons/NumpyIcon';
import Title from './Title';

function Project() {
  return (
    <div className={[styles.projectContainer, 'mx-auto my-20'].join(' ')}>
      <div className="flex items-end justify-center md:mt-32 sm:mt-20 mt-16">
        <Title> Projects</Title>
      </div>
      <div
        className={[
          styles.project,
          'dark:bg-stone-900 hover:dark:bg-[#292524] text-black dark:text-stone-300',
        ].join(' ')}
      >
        <div className={styles.projectTextBox}>
          <a
            className="hover:dark:text-stone-50 transition-all duration-500"
            href="https://github.com/bvedang/expense-manager"
            target="_blank"
          >
            <h1 className={styles.headingSecondary}>
              Personal Expense Manager
            </h1>
          </a>
          <div className={styles.projectDesc}>
            <h3 className={styles.headingTertiary}>Description</h3>
            <p className={styles.projectContent}>
              An online web application that tracks individual expenses You can
              add expenses and view monthly spending by category. The
              application offers graphs based on the user's added expenses and
              offers analytical views based on the user's prior spending.
              Application shows how much the user has spent or saved in
              comparison to the average for the preceding month for each
              category.
            </p>
            <div className="mt-4 flex align-center justify-end">
              <a
                className=" text-sm transition-all duration-500 hover:dark:border-b hover:border-b hover:dark:border-stone-300 hover:border-stone-700"
                href="https://bvedang.github.io/expense-manager/"
                target="_blank"
              >
                {' '}
                Live Demo
              </a>
            </div>
          </div>
          <h3
            className={[styles.headingTertiary, styles.techStackHeading].join(
              ' '
            )}
          >
            Tech Stack
          </h3>
          <ul className={styles.projectTechStack}>
            <li className={styles.techStackItems}>
              <div className="flex flex-col justify-center items-center">
                <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
                  <ReactIcon height="2.5rem" width="2.5rem" />
                </div>
                <span className="mt-1">React Js</span>
              </div>
            </li>
            <li className={styles.techStackItems}>
              <div className="flex flex-col justify-center items-center">
                <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
                  <FlaskIcon height="2.5rem" width="2.5rem" />
                </div>
                <span className="mt-1">Flask</span>
              </div>
            </li>
            <li className={styles.techStackItems}>
              <div className="flex flex-col justify-center items-center">
                <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
                  <MaterialUiIcon height="2.5rem" width="2.5rem" />
                </div>
                <span className="mt-1">Material-UI</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.projectImgBox}>
          <img
            className={styles.projectImg}
            src="../assets/expenseManager.jpg"
            alt="Project Image"
          />
        </div>
      </div>
      <div
        className={[
          styles.project,
          'dark:bg-stone-900 hover:dark:bg-[#292524] text-black dark:text-stone-300',
        ].join(' ')}
      >
        <div className={styles.projectImgBox}>
          <img
            className={styles.projectImg}
            src="../assets/microService.jpg"
            alt="Project Image"
          />
        </div>
        <div className={styles.projectTextBox}>
          <a
            href="https://github.com/bvedang/React-Flask-Microservice"
            target="_blank"
          >
            <h1 className={styles.headingSecondary}>
              Time-series Forecasting with Microservice Architecture
            </h1>
          </a>

          <div className={styles.projectDesc}>
            <h3 className={styles.headingTertiary}>Description</h3>
            <p className={styles.projectContent}>
              This is web application that uses MicroServices Architecture for
              timeseries forecasting. Application pulls Github repositories
              data(issues, forks ,branches, commits, release) using the Github
              repo api on the main flask server. After retriving data from
              Github api it is sent to three different servers hosting 3
              different timeseries-forecasting models i.e LSTM FB prophet and
              Statsmodel. Forecast data is visualized in frontEnd with React
              using Re-Chart
            </p>
          </div>
          <h3
            className={[styles.headingTertiary, styles.techStackHeading].join(
              ' '
            )}
          >
            Tech Stack
          </h3>
          <ul className={styles.projectTechStack}>
            <li className={styles.techStackItems}>
              <div className="flex flex-col justify-center items-center">
                <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
                  <TensorflowIcon height="2.5rem" width="2.5rem" />
                </div>
                <span className="mt-1">LSTM</span>
              </div>
            </li>
            <li className={styles.techStackItems}>
              <div className="flex flex-col justify-center items-center">
                <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
                  <ReactIcon height="2.5rem" width="2.5rem" />
                </div>
                <span className="mt-1">React</span>
              </div>
            </li>
            <li className={styles.techStackItems}>
              <div className="flex flex-col justify-center items-center">
                <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
                  <FlaskIcon height="2.5rem" width="2.5rem" />
                </div>
                <span className="mt-1">LSTM</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={[
          styles.project,
          'dark:bg-stone-900 hover:dark:bg-[#292524] text-black dark:text-stone-300',
        ].join(' ')}
      >
        <div className={styles.projectTextBox}>
          <h1 className={styles.headingSecondary}>
            Effect of Noise on Sentiment Analysis using SVM and BERT
          </h1>
          <div className={styles.projectDesc}>
            <h3 className={styles.headingTertiary}>Description</h3>
            <p className={styles.projectContent}>
              This project is more of an experiment than an application. Here,
              we tested the impact of noise in sentiment analysis on a Support
              Vector Machine (SVM) model and a Bidirectional Encoder from
              Transformer (BERT) representation framework. We created different
              sized sample noisy datasets from "Disneyland Reviews" and "Amazon
              Reviews" containing equal positive, negative, and neutral labels.
              We then analyzed and visualized the performance of the SVM and
              BERT classifiers for different sample sizes and the presence of
              noise in the data with baseline results.
            </p>
          </div>
          <h3
            className={[styles.headingTertiary, styles.techStackHeading].join(
              ' '
            )}
          >
            Tech Stack
          </h3>
          <ul className={styles.projectTechStack}>
            <li className={styles.techStackItems}>
              <div className="flex flex-col justify-center items-center">
                <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
                  <TensorflowIcon height="2.5rem" width="2.5rem" />
                </div>
                <span className="mt-1">BERT</span>
              </div>
            </li>
            <li className={styles.techStackItems}>
              <div className="flex flex-col justify-center items-center">
                <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
                  <PandasIcon height="2.5rem" width="2.5rem" />
                </div>
                <span className="mt-1">Pandas</span>
              </div>
            </li>
            <li className={styles.techStackItems}>
              <div className="flex flex-col justify-center items-center">
                <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
                  <NumpyIcon height="2.5rem" width="2.5rem" />
                </div>
                <span className="mt-1">Numpy</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.projectImgBox}>
          <img
            className={styles.projectImg}
            src="../assets/nlp.png"
            alt="Project Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
