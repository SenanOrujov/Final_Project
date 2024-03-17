﻿namespace SeeN.Entities
{
    public class Cinema
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public List<CinemaHour> CinemaHours { get; set; }
        public List<Hall> Halls { get; set; }
    }
}
