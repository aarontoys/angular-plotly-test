export class SolicitationStatus {
  public completeAccepted: number;
  public receivedInReview: number;
  public inProcess: number;
  public notStarted: number;
  public deficient: number;
  public solicited: number;
  public labels = [
    'Not Yet Started',
    'In Process',
    'Received, Acquiom<br>Review in Process',
    'Deficient',
    'Complete, Reviewed and<br>Accepted by Acquiom',
  ];
  public hiddenLabels: string[] = [];

  constructor(response: any) {
    this.completeAccepted = response.completeaccepted;
    this.receivedInReview = response.completeinreview;
    this.inProcess = response.inprocess;
    this.notStarted = response.notstarted;
    this.solicited = response.solicited;
    this.deficient = response.deficient;
    this.configureLabels();
  }

  /**
   * Checks and counts the sum of the properties that represent less than fifteen percent of the total that will be
   * grouped together at the beginning or end of the pie chart and which need more space for display.
   *
   * @returns {number}
   */
  isLT15Percent(): number {
    const pieSlicePercentages: number[] = [];
    let count = 0;
    pieSlicePercentages.push(this.notStarted / this.solicited);
    pieSlicePercentages.push(this.inProcess / this.solicited);
    pieSlicePercentages.push(this.receivedInReview / this.solicited);
    pieSlicePercentages.push(this.deficient / this.solicited);
    pieSlicePercentages.push(this.completeAccepted / this.solicited);

    pieSlicePercentages.reduce((prev, curr) => {
      if (prev && prev < 0.15) {
        count++;
      }
      return prev + curr;
    });

    pieSlicePercentages.reduceRight((prev, curr) => {
      if (prev && prev < 0.15) {
        count++;
      }
      return prev + curr;
    });

    return count;
  }

  /**
   * Pushes labels for properties into the hiddenLabels array to turn off the display of these labels by default
   *
   * @private
   * @returns {void}
   */
  private configureLabels(): void {
    if (this.notStarted === 0) {
      this.hiddenLabels.push(this.labels[0]);
    }
    if (this.inProcess === 0) {
      this.hiddenLabels.push(this.labels[1]);
    }
    if (this.receivedInReview === 0) {
      this.hiddenLabels.push(this.labels[2]);
    }
    if (this.deficient === 0) {
      this.hiddenLabels.push(this.labels[3]);
    }
    if (this.completeAccepted === 0) {
      this.hiddenLabels.push(this.labels[4]);
    }
  }
}
