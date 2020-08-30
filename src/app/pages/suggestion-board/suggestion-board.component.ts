import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http"; import { Observable } from 'rxjs';
import { Suggestion } from '../../models/Suggestion';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-suggestion-board',
  templateUrl: './suggestion-board.component.html',
  styleUrls: ['./suggestion-board.component.scss']
})
export class SuggestionBoardComponent implements OnInit {

  @ViewChild('closeBtn', { static: false }) public closeBtn: ElementRef;

  public suggestions: Suggestion[];
  private api = environment.server.host + environment.server.api;
  private suggestionUrl = '/suggestions';
  private newSuggestionUrl = '/new-suggestion';
  private lastSelected: number;
  public openSuggestionForm: boolean = false;

  public suggestionForm: FormGroup;
  public submitted = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getSuggestions().subscribe(s => {
      this.suggestions = s;
      this.suggestions.forEach(s => s.collapsed = true)
    });

    this.suggestionForm = this.formBuilder.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  public getSuggestions(): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(this.api + this.suggestionUrl);
  }

  public expandSuggestion(i: number) {
    console.log(this.lastSelected);
    console.log(i);
    this.suggestions.forEach(s => s.collapsed = true)
    if (this.lastSelected != i) {
      this.lastSelected = i;
      this.suggestions[i].collapsed = !this.suggestions[i].collapsed;
    }
    else {
      this.lastSelected = -1;
    }

  }
  public openForm() {
    this.openSuggestionForm = !this.openSuggestionForm;
    if (this.openSuggestionForm)
      this.closeBtn.nativeElement.textContent = "Close";
    else
      this.closeBtn.nativeElement.textContent = "Write on board";
    this.submitted = false;
    this.suggestionForm.reset();
  }

  public onSubmit() {
    this.submitted = true;
    if (this.suggestionForm.invalid) return;

    console.log(this.suggestionForm.value);
    let newSuggestion: Suggestion = this.suggestionForm.value;
    this.http.post<Suggestion>(this.api + this.newSuggestionUrl, newSuggestion).subscribe(
      r => {
        this.getSuggestions().subscribe(s => {
          this.suggestions = s;
          this.suggestions.forEach(s => s.collapsed = true)
          // confirm to the user the message is sended succefully
          this.messageSended(newSuggestion);
          this.submitted = false;
          this.suggestionForm.reset();
        });
      }
    );

  }

  get f() { return this.suggestionForm.controls; }

  messageSended(s: Suggestion) {

  }
}
