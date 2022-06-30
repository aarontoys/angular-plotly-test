export class HoldersSolicited {
  public holders: number;
  public solicited: number;
  public notSolicited: number;
  public labels = ['Solicited', 'Not Yet Solicited'];
  public hiddenLabels: string[] = [];

  constructor(response: any) {
    this.holders = response.holders;
    this.solicited = response.solicited;
    this.notSolicited = this.holders - this.solicited;
    this.configureLabels();
  }

  /**
   * Pushes labels for properties into the hiddenLabels array to turn off the display of these labels by default
   *
   * @private
   * @returns {void}
   */
  private configureLabels(): void {
    if (this.solicited === 0) {
      this.hiddenLabels.push(this.labels[0]);
    }
    if (this.notSolicited === 0) {
      this.hiddenLabels.push(this.labels[1]);
    }
  }
}
