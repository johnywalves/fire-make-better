import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  search: string = '';
  loadingSearch: boolean = false;
  timeoutSearch: number;

  gotoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  onClearSearch = () => {
    this.search = '';
    this.onChangeSearch('');
  };

  onKeyPressSearch = (event) => {
    if (event === 'Escape') {
      this.onClearSearch();
    }
  };

  onChangeSearch = (event) => {
    window.scrollTo({
      top:
        document.getElementById('list-result').offsetTop -
        document.querySelector('header').clientHeight,
      behavior: 'smooth',
    });

    if (event !== '') {
      this.loadingSearch = true;
      this.timeoutSearch && clearTimeout(this.timeoutSearch);

      this.timeoutSearch = window.setTimeout(() => {
        this.loadingSearch = false;
      }, 500);
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
