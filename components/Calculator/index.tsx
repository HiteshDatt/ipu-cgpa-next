import React, { ReactElement, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
const Alert = dynamic(() => import("@mui/material/Alert"));
const Snackbar = dynamic(() => import("@mui/material/Snackbar"));
interface CalculationData {
  key: number;
  marks: number | null;
  credits: number | null;
}

const Calculator = (): ReactElement => {
  const [numberOfSubject, setNumberOfSubjects] = useState<number>(8);
  const [calculationData, setCalculationData] = useState<CalculationData[]>([
    {
      key: 0,
      marks: null,
      credits: null,
    },
  ]);
  const [finalCGPA, setFinalCGPA] = useState<string>("");
  const [openToast, setOpenToast] = useState<boolean>(false);
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const diff: number = numberOfSubject - calculationData.length;
    if (diff > 0) {
      setCalculationData((prevCalculationData) => {
        let data: CalculationData[] = [];
        [...Array(diff)].forEach((_item, index) => {
          data.push({
            key:
              prevCalculationData[prevCalculationData.length - 1]?.key +
              index +
              1,
            marks: null,
            credits: null,
          });
        });
        return [...prevCalculationData, ...data];
      });
    } else if (diff < 0) {
      setCalculationData((prevCalculationData) => {
        return [...prevCalculationData.slice(0, diff)];
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfSubject]);

  useEffect(() => {
    let data: CalculationData[] = [];
    [...Array(numberOfSubject)].map((_item, index) => {
      data.push({
        key: index,
        marks: null,
        credits: null,
      });
    });
    setCalculationData(data);

    if (inputElement.current) {
      inputElement.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGradePointFromMarks = (marks: number): number => {
    switch (true) {
      case marks >= 90:
        return 10;
      case marks >= 75:
        return 9;
      case marks >= 65:
        return 8;
      case marks >= 55:
        return 7;
      case marks >= 50:
        return 6;
      case marks >= 45:
        return 5;
      case marks >= 40:
        return 4;
      default:
        return 0;
    }
  };

  const calculateCGPA = () => {
    let sum = 0,
      totalCredits = 0;
    calculationData.forEach((item) => {
      if (item?.credits && item?.marks) {
        sum = sum + item?.credits * getGradePointFromMarks(item?.marks);
        totalCredits = totalCredits + item?.credits;
      } else {
        console.log("error");
      }
    });

    setFinalCGPA(`${Math.round((sum / totalCredits) * 100) / 100}`);
    setOpenToast(true);
  };
  return (
    <section>
      <h1 className={styles.heading}>IPU CGPA Calculator</h1>
      <div>
        <div className={styles.slidecontainer}>
          <div>
            <p>Choose number of subjects</p>
            <p className={styles.numberOfSub}>{numberOfSubject}</p>
          </div>
          <input
            type="range"
            min="2"
            max="13"
            value={numberOfSubject}
            className={styles.slider}
            id="myRange"
            onChange={(e) => setNumberOfSubjects(Number(e.target.value))}
          />
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.calculatorTable}>
            <tbody>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Credits</th>
              </tr>
              {[...Array(numberOfSubject)].map((item, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.subjectNumber}>{index + 1}</td>
                    <td>
                      <input
                        ref={index == 0 ? inputElement : null}
                        type="number"
                        className="inputbox"
                        id={`marks${index}`}
                        value={calculationData[index]?.marks || ""}
                        onChange={(e) => {
                          setCalculationData((prevCalculationData) => {
                            if (
                              prevCalculationData[index].marks ==
                              Number(e.target.value)
                            ) {
                              return prevCalculationData;
                            }
                            prevCalculationData[index].marks = Number(
                              e.target.value
                            );
                            return [...prevCalculationData];
                          });
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="inputbox"
                        id={`credits${index}`}
                        value={calculationData[index]?.credits || ""}
                        onChange={(e) => {
                          setCalculationData((prevCalculationData) => {
                            if (
                              prevCalculationData[index].credits ==
                              Number(e.target.value)
                            ) {
                              return prevCalculationData;
                            }
                            prevCalculationData[index].credits = Number(
                              e.target.value
                            );

                            return [...prevCalculationData];
                          });
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={styles.calculateBtn} onClick={calculateCGPA}>
            Submit
          </div>
        </div>

        <div className={styles.finalCGPA}>
          {finalCGPA !== "" && (
            <>
              {finalCGPA === "NaN" ? (
                <>Incorrect values entered</>
              ) : (
                <>
                  Your CGPA is <span>{finalCGPA}</span>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <Snackbar
        open={finalCGPA !== "" && finalCGPA !== "NaN" && openToast}
        autoHideDuration={6000}
        onClose={() => setOpenToast(false)}
        style={{
          width: "80%",
          maxWidth: "500px",
          left: "0",
          right: "0",
          margin: "auto",
        }}
      >
        <div style={{ width: "100%" }}>
          <Alert
            severity="success"
            icon={false}
            style={{ height: "60px" }}
            sx={{
              width: "80%",
              margin: "auto",
              justifyContent: "center",
              alignItems: "flex-end",
              boxShadow: "0px 2px 12px #888888",
              borderRadius: "10px",
            }}
          >
            <div className={styles.finalCGPA}>
              Your CGPA is <span>{finalCGPA}</span>
            </div>
          </Alert>
        </div>
      </Snackbar>
    </section>
  );
};

export default Calculator;
