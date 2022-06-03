import React, { ReactElement } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const Description = (): ReactElement => {
  return (
    <section className={styles.description}>
      <h1>How to calculate CGPA for IPUniversity?</h1>
      <p>The formula for calculation of CGPA is given below:</p>
      <p>
        <Image
          src="/CGPAalgo.png"
          alt="CGPA Calculator Algorithm"
          title="CGPA Calculator Algorithm"
          width={210}
          height={70}
        />
        <br />
        Where <br />C<sub>ni</sub> - number of credits of the ith course of the
        nth semester.
        <br />G<sub>ni</sub> - grade points of the ith course of the nth
        semester
      </p>
      <>
        <h2>In easier words :</h2>
        <ol>
          <li>
            It calculates the product of &apos;credits and grade point&apos; for
            each subject and add them
          </li>
          <li>
            then divides the result obtained above by the total number of
            credits
          </li>
          <li>
            and lastly the final result is rounded off to 2 decimal places
          </li>
        </ol>
      </>
      <>
        <h2>Grading System :</h2>
        <p>
          The marks that a student secures from the maximum 100 are to be
          converted into a grade as a letter.
        </p>
        <p>
          The grade points are the numerical equivalent of the letter grade
          assigned to a student based on the total marks obtained by the
          student. These grade points and letter grades are based on the points
          scale as given below:
        </p>
        <table className={styles.gradepoint}>
          <caption>Grade Points</caption>
          <tbody>
            <tr>
              <th>Marks</th>
              <th>Grade</th>
              <th>Grade Point</th>
            </tr>
            <tr>
              <td>90-100</td>
              <td>O&nbsp;</td>
              <td>10</td>
            </tr>
            <tr>
              <td>75-89</td>
              <td>A+</td>
              <td>9</td>
            </tr>
            <tr>
              <td>65-74</td>
              <td>A&nbsp;</td>
              <td>8&nbsp;</td>
            </tr>
            <tr>
              <td>55-64</td>
              <td>B+</td>
              <td>7</td>
            </tr>
            <tr>
              <td>50-54</td>
              <td>B&nbsp;</td>
              <td>6</td>
            </tr>
            <tr>
              <td>45-49</td>
              <td>C&nbsp;</td>
              <td>5</td>
            </tr>
            <tr>
              <td>40-44</td>
              <td>P&nbsp;</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <p>
                  Less than 40
                  <br />
                  or absent
                </p>
              </td>
              <td>F&nbsp;</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <p>
          Grade P, that is the grade point 4 is the course passing grade unless
          specified otherwise by the Syllabi and Scheme of Teaching and
          Examination for the respective programme.
        </p>
        <p>
          For grades below the passing grade (P) as defined in the Syllabi and
          Scheme of Teaching and Examination, the associated grade points are to
          be taken equal to zero.
        </p>
        <p>
          Both the acquired marks and grades are to be reflected on the term end
          marksheets.
        </p>
      </>
      <>
        <h2>CGPA Divisions :</h2>
        <p>
          The successful candidates having an overall CGPA higher than or equal
          to the minimum CGPA that is specified in the Syllabi and Scheme of
          Teaching and Examination for the award of the degree, are to be
          awarded the degree and be placed in Divisions as below:
        </p>
        <p></p>
        <ul id="division">
          <li>
            <span>CGPA of 4.00 – 4.99</span> are to be placed in the Third
            Division.
          </li>
          <li>
            <span>CGPA of 5.00 – 6.49</span> are to be placed in the Second
            Division.
          </li>
          <li>
            <span>CGPA of 6.50 or above</span> are to be placed in the First
            Division.
          </li>
          <li>
            <span>CGPA of 10</span> are to be placed in the Exemplary
            Performance. Exemplary Performance shall be awarded, if and only if,
            every course of the programme offered to the student is passed in
            the first chance of appearing in the paper that is offered to the
            student. A student with an academic break shall not be awarded the
            exemplary performance.
          </li>
          <li>
            {" "}
            The CGPA x 10 shall be deemed equivalent to percentage of marks
            obtained by the student for the purpose of equivalence to percentage
            of marks.
          </li>
        </ul>
        <p></p>
      </>
      <p className={styles.note}>
        Note:
        <br />
        This IPU CGPA Calculator works on the algorithm provided by IPUniversity
        in the ordinance 11.
        <br />
        <a
          href="http://ipu.ac.in/norms/Ordinance/oridancemain.htm"
          target="_blank"
          rel="noopener noreferrer"
          title="University Ordinance"
        >
          ~University School of Education,GGSIPU (University Ordinance)
        </a>
        <br />
        <a
          href="http://ipu.ac.in/norms/Ordinance/ordinanc11020815.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Ordinance 11"
        >
          ~Ordinance 11
        </a>
      </p>
    </section>
  );
};

export default Description;
